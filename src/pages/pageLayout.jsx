import { Outlet } from "react-router-dom";

export function PageLayout() {
    return (
        <div className='p-10 bg-slate-100 min-h-screen'>
            <Outlet />
        </div>
    );
}
