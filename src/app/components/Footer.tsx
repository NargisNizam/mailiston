export default function Footer() {
    return (
        <>
            <footer className="bg-gray-100 p-10 border-t-2 border-gray-300">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-gray-800">
                    {/* Address Section */}
                    <div>
                    <h4 className="font-semibold text-lg mb-2">Services.</h4>
                        <ul className="text-sm space-y-2">
                            <li>Branding</li>
                            <li>Design</li>
                            <li>Markiting</li>
                            <li>Advertisement</li>
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Company</h4>
                        <ul className="text-sm space-y-2">
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Jobs</li>
                            <li>Press Kit</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Legal</h4>
                        <ul className="text-sm space-y-2">
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Cookie Policies</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                                className="border border-gray-300 rounded-md p-2 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-black text-white font-bold py-2 px-4 rounded-md"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center border-t pt-4">
                    <p className="text-sm text-gray-500">2023 Funiro. All rights reserved</p>
                </div>
            </footer>
        </>
    );
}