// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "@/server/connection/connect";
import Project from "@/server/models/project";

export default async function handler(
    req,
    res
) {
    if (req.method !== "PUT") {
        return res.status(400).json({
            success: false,
            message: "Only put method can access this route !",
        });
    }

    await connect();

    const { id } = req.query;

    try {
        const project = await Project.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            success: true,
            message: "Project data updated successfully !",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error?.response?.data?.message ||
                error?.message ||
                "Internal server error",
        });
    }
}
