import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(20),
  body: z.string().min(5),
});
export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>; //型を抽出

export const updateTaskSchema = z.object({
  taskId: z.string().cuid(),
  title: z.string().min(20),
  body: z.string().min(5),
});
export type UpdateTaskInput = z.TypeOf<typeof updateTaskSchema>;

export const getSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});
export const deleteSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});
