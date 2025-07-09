import React, { useEffect, useState } from "react";
import axios from "../axiosconfig";
import "./stylesheet/admin.style.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function AdminPage() {
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const decoded: any = jwtDecode(token);
            if (!decoded || !decoded.roles?.includes("ADMIN")) {
                navigate("/login");
                return;
            }

            const fetchComments = async () => {
                const res = await axios.get("/comments");
                setComments(res.data);
            };

            fetchComments();
        } catch (err) {
            navigate("/login");
        }
    }, [navigate]);

    const deleteComment = async (id: number) => {
        await axios.delete(`/admin/comments/${id}`);
        const res = await axios.get("/comments");
        setComments(res.data);
    };

    return (
        <div className="admin-container">
            <h1>Admin: Kommentarverwaltung</h1>
            <div className="admin-comments">
                {comments.map((c: any) => (
                    <div className="admin-comment" key={c.id}>
                        <p><strong>{c.username}</strong> schrieb:</p>
                        <p>{c.content}</p>
                        <p className="timestamp">{new Date(c.createdAt).toLocaleString()}</p>
                        <button onClick={() => deleteComment(c.id)}>Löschen</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;
