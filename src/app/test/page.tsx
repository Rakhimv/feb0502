import { CircularProgress } from "@mui/material";
import MyModal from "../components/ui/MyModal";

export default function About() {
    return (
        <>
            <div className="w-full flex h-[200px] items-center justify-center">
                <CircularProgress />
                <MyModal />
            </div>
        </>
    )
}