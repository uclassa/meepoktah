const Exco = ({ excoData }: { excoData: Record<string, string>[] }) => {
    return (
        <div
            id="team"
            className="flex flex-col items-center justify-center max-md:-mt-32 max-sm:p-5"
        >
            <h1 className="mt-8 mb-2 text-[2.5rem] text-navyblue max-md:mt-[150px] max-sm:text-2xl">
                {" "}
                Executive Board{" "}
            </h1>
            <h3 className="mb-9 text-red italic">
                Our association is built by our community
            </h3>
            {excoData?.length > 0 && (
                <div className="grid max-w-[1400px] items-center gap-4 py-2.5 md:grid-cols-2 xl:grid-cols-3">
                    {excoData.map((data, index) => (
                        <ExcoMember data={data} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

function ExcoMember({ data }: { data: Record<string, string> }) {
    return (
        <div className="flex w-[320px] flex-col items-center overflow-hidden rounded-2xl bg-darkblue text-offwhite">
            <div className="top-0 grid h-[320px] grid-cols-1 grid-rows-1 items-center justify-items-center overflow-hidden">
                <img
                    className="col-[1] row-[1] min-h-1/1 object-cover"
                    src={data.photo}
                    alt={data.alt}
                />
                {data.alt_photo && (
                    <img
                        className="linear col-[1] row-[1] min-h-1/1 object-cover opacity-0 transition duration-300 hover:opacity-100"
                        src={data.alt_photo}
                        alt={data.alt}
                    />
                )}
            </div>
            <div className="p-3 text-center">
                <h2 className="pb-0.5 text-xl">{data.name}</h2>
                <p className="pb-1 text-[0.9rem]">{data.role}</p>
                <h4 className="pb-1 text-[0.95rem]">
                    {data.major} {data.year}
                </h4>
            </div>
        </div>
    );
}

export default Exco;
