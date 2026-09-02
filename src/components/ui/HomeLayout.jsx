

export default function HomeLayout({title, name}){

    return(
        <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-gradient-to-tr from-teal-900 via-teal-800 to-teal-400">
            <div className="flex">
                <div>
                   <p>{title}<br />{name}</p>

                </div>

            </div>
            <span>{title}</span>

            <div>

            </div>




        </div>
    );
}