const Exco = ({ excoData }: { excoData: Record<string, string>[] }) => {
    return (
        <div
            id="team"
            className="flex flex-col justify-center items-center max-sm:p-5 max-md:-mt-32"
        >
            <h1 className="text-[2.5rem] text-navyblue mb-2 mt-8 max-md:mt-[150px] max-sm:text-2xl">
                {" "}
                Executive Board{" "}
            </h1>
            <h3 className="mb-9 text-red italic">
                Our association is built by our community
            </h3>
            {excoData?.length > 0 && (
                <div className="max-w-[1400px] grid md:grid-cols-2 xl:grid-cols-3 items-center gap-4 py-2.5">
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
        <div className="bg-darkblue text-offwhite flex flex-col w-[320px] rounded-2xl overflow-hidden items-center">
            <div className="grid grid-cols-1 grid-rows-1 h-[320px] overflow-hidden top-0 items-center justify-items-center">
                <img
                    className="object-cover col-[1] row-[1] min-h-1/1"
                    src={data.photo}
                    alt={data.alt}
                />
                {data.alt_photo && (
                    <img
                        className="object-cover col-[1] row-[1] transition duration-300 linear opacity-0 hover:opacity-100 min-h-1/1"
                        src={data.alt_photo}
                        alt={data.alt}
                    />
                )}
            </div>
            <div className="p-3 text-center">
                <h2 className="text-xl pb-0.5">{data.name}</h2>
                <p className="text-[0.9rem] pb-1">{data.role}</p>
                <h4 className="text-[0.95rem] pb-1">
                    {data.major} {data.year}
                </h4>
            </div>
        </div>
    );
}

export default Exco;
