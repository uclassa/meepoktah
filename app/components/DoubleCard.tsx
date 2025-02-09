import type { ReactNode } from "react";

export default function DoubleCard({
    leftContent,
    rightContent,
    leftIsTop,
}: {
    leftContent: ReactNode;
    rightContent: ReactNode;
    leftIsTop: boolean;
}) {
    return (
        <div className="grid max-w-[1100px] auto-cols-fr items-center justify-items-center py-20 md:pt-40">
            {leftIsTop ? (
                <>
                    <div className="col-end-2 max-w-[540px] p-7.5">
                        {leftContent}
                    </div>
                    <div className="col-auto max-w-[540px] p-7.5 lg:col-start-2">
                        {rightContent}
                    </div>
                </>
            ) : (
                <>
                    <div className="col-end-2 max-w-[540px] p-7.5 max-lg:row-start-2">
                        {leftContent}
                    </div>
                    <div className="col-auto max-w-[540px] p-7.5 lg:col-start-2">
                        {rightContent}
                    </div>
                </>
            )}
        </div>
    );
}
