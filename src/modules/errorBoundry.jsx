import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex h-screen w-full flex-col items-center justify-center'>
                    <h1>Something went wrong.</h1>
                    <button
                        onClick={() => (window.location.href = window.location)}
                        className=' h-8 w-[40%] rounded-xl border-2 border-blue-400 p-1 text-sm text-blue-400 hover:border-blue-500 hover:bg-blue-300 hover:text-blue-700'
                    >
                        Reload
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
