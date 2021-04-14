import LandingLayout from "components/landing/landingLayout";

export default function DiabetesSupplies() {
    return (
        <LandingLayout header="Diabetes Supplies">
            <div className="py-4 xl:px-96 md:px-40 flex justify-around">
                <img className="w-1/4 h-1/4" src="https://a.storyblok.com/f/110693/3034x3471/132bed4813/medical-serpent-blue.png" alt="Medical Caduceus" />
                <img className="w-1/4 h-1/4" src="https://a.storyblok.com/f/110693/1024x1024/f5fb912c10/diabetes-circle-svg.png" alt="Diabetes Circle of Unity" />
                <img className="w-1/4 h-1/4" src="https://a.storyblok.com/f/110693/3034x3471/132bed4813/medical-serpent-blue.png" alt="Medical Caduceus" />
            </div>
            <div className="py-4">
                <h1 className="my-4 text-gray-700 text-5xl font-normal text-center">Diabetes Supplies</h1>
                <p className="text-gray-500 text-2xl text-center">
                    These snacks are for a diabetic in the event that their blood sugar drops too low. 
                    Please do not eat or remove them from this location.
                </p>
            </div>
            <div className="py-4">
                <h1 className="my-4 text-gray-700 text-5xl font-normal text-center">More Information About Diabetes</h1>
                <p className="text-gray-500 text-2xl text-center">
                    The following are links to external sources that con provide more information about 
                    diabetes.
                </p>
                <table className="my-4 table-auto flex justify-center">
                    <tbody>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="http://www.diabetes.org/">American Diabetes Association</a></td></tr>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="https://www.who.int/health-topics/diabetes">WHO - Diabetes - General</a></td></tr>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="https://www.cdc.gov/diabetes/basics/diabetes.html">CDC - Diabetes - General</a></td></tr>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="https://medlineplus.gov/diabetes.html">NIH - Diabetes - General</a></td></tr>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="https://medlineplus.gov/diabetestype1.html">NIH - Diabetes - Type 1</a></td></tr>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="https://medlineplus.gov/diabetestype2.html">NIH - Diabetes - Type 2</a></td></tr>
                        <tr><td className="border border-gray-400 py-3 lg:px-40 px-10 text-xl text-blue-800 text-center"><a href="https://www.mayoclinic.org/diseases-conditions/diabetes">Mayo Clinic - Diabetes - General</a></td></tr>
                    </tbody>
                </table>
            </div>
        </LandingLayout>
    )
}