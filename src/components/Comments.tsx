import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Cookies from "js-cookie";
import Link from "next/link";
import axiosInstance from "@/axiosConfig";

interface Comment {
  id: number;
  email: string;
  comment_text: string;
  created_at: string;
  role: string;
  color: string;
}

const Comments = ({ id }: { id: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response: any = await axiosInstance.get(`/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Failed to load comments.");
      }
    };

    if (id) {
      fetchComments();
    }
  }, [id]);

  console.log(comments);
  const addComment = async (email: string, comment_text: string) => {
    const newCommentObj = { email, comment_text };

    try {
      setLoading(true);
      const response: any = await axiosInstance.post(
        `/add_comments/${id}`,
        newCommentObj,
      );

      if (response.status === 200) {
        setComments(response.data.comments);
        setNewComment("");
      } else {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error posting new comment:", error);
      setError("Failed to add comment.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  const cookies = Cookies.get("email");

  return (
    <div id="comments" className="w-full flex my-5 justify-center">
      <div className="w-11/12 comments-section bg-neutral-800 text-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-100">Comments</h3>

        {error && <div className="text-red-500">{error}</div>}

        <div className="comments-list mt-4">
          {comments.map((comment, key) => (
            <div
              key={key}
              className="comment p-4 mb-4 cursor-pointer hover:bg-neutral-700 rounded-2xl border-gray-600"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 flex justify-center items-center rounded-full text-2xl font-black`}
                    style={{
                      backgroundColor: comment.color,
                    }}
                  >
                    {comment.email[0].toUpperCase()}
                  </div>
                  <p className="font-bold text-gray-200">{comment.email}</p>
                  {comment.role === "admin" ? (
                    <p className="font-normal text-xs bg-gradient-to-br from-violet-500 to-red-500 p-1 px-2 rounded-2xl text-gray-200">
                      {comment.role}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-xs text-gray-400">
                  {format(
                    new Date(comment.created_at),
                    "MMM dd, yyyy HH:mm:ss",
                  )}
                </p>
              </div>
              <p className="text-gray-300 ml-10 mt-2">{comment.comment_text}</p>
            </div>
          ))}
        </div>

        {cookies ? (
          <div className="add-comment mt-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="w-full p-3 bg-neutral-900 text-white rounded-md border border-gray-600 focus:outline-none"
              placeholder="Write a comment..."
            />
            <button
              onClick={async () => {
                if (newComment.trim()) {
                  await addComment("You", newComment.trim());
                }
              }}
              disabled={loading}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              {loading ? "Posting..." : "Add Comment"}
            </button>
          </div>
        ) : (
          <div className="w-full h-50 p-2 bg-neutral-700 rounded-xl">
            <Link href="/auth/login" className="text-blue-400 underline">
              Войдите в аккаунт
            </Link>
            , чтобы писать комментарии.
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
