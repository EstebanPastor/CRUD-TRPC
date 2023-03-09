import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../api/src/app";

export const trpc = createTRPCReact<AppRouter>();
