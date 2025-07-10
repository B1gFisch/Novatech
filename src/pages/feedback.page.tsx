import React, { useEffect, useState } from "react";
import axios from "../axiosconfig";
import "./stylesheet/feedback.style.css";

function FeedbackPage() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const loadComments = async () => {
        try {
            const res = await axios.get("/comments");
            setComments(res.data);
        } catch (e) {
            console.error("Fehler beim Laden der Kommentare:", e);
        }
    };

    const submitComment = async () => {
        if (!newComment.trim()) return;
        try {
            await axios.post("/comments", {
                content: newComment,
            });
            setNewComment("");
            loadComments();
        } catch (e) {
            console.error("Fehler beim Senden des Kommentars:", e);
        }
    };

    const likeComment = async (id: number) => {
        const likedKey = `liked_${id}`;
        const dislikedKey = `disliked_${id}`;

        if (localStorage.getItem(likedKey) || localStorage.getItem(dislikedKey)) {
            alert("Du hast diesen Kommentar bereits bewertet.");
            return;
        }

        try {
            await axios.post(`/comments/${id}/like`);
            localStorage.setItem(likedKey, "true");
            loadComments();
        } catch (e) {
            console.error("Fehler beim Liken:", e);
        }
    };

    const dislikeComment = async (id: number) => {
        const likedKey = `liked_${id}`;
        const dislikedKey = `disliked_${id}`;

        if (localStorage.getItem(likedKey) || localStorage.getItem(dislikedKey)) {
            alert("Du hast diesen Kommentar bereits bewertet.");
            return;
        }

        try {
            await axios.post(`/comments/${id}/dislike`);
            localStorage.setItem(dislikedKey, "true");
            loadComments();
        } catch (e) {
            console.error("Fehler beim Disliken:", e);
        }
    };

    useEffect(() => {
        loadComments();
    }, []);

    return (
        <div className="feedback-container">
            <h1>Feedback</h1>

            <div className="feedback-form">
                <textarea
                    placeholder="Dein Kommentar..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={submitComment}>Absenden</button>
            </div>

            <div className="comments-list">
                {comments.map((c: any) => {
                    const liked = localStorage.getItem(`liked_${c.id}`);
                    const disliked = localStorage.getItem(`disliked_${c.id}`);
                    const alreadyVoted = liked || disliked;

                    return (
                        <div key={c.id} className="comment">
                            <p className="content">{c.content || "(Kein Inhalt)"}</p>
                            <div className="meta">
                                <span>von {c.username}</span>
                                <span>{new Date(c.createdAt).toLocaleString()}</span>
                            </div>
                            <div className="actions">
                                <button
                                    onClick={() => likeComment(c.id)}
                                    disabled={!!alreadyVoted}
                                    className={liked ? "voted-like" : ""}
                                >
                                    👍 {c.likes}
                                </button>
                                <button
                                    onClick={() => dislikeComment(c.id)}
                                    disabled={!!alreadyVoted}
                                    className={disliked ? "voted-dislike" : ""}
                                >
                                    👎 {c.dislikes}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FeedbackPage;
