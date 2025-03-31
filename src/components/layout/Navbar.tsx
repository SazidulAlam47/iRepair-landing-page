import Container from "../custom/Container";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <Container asChild>
            <header className="flex justify-between items-center min-h-14">
                <h4 className="text-xl">iRepair</h4>
                <nav className="flex items-center gap-3">
                    <ul className="flex gap-3">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Service</li>
                    </ul>
                    <Button>Login</Button>
                </nav>
            </header>
        </Container>
    );
};

export default Navbar;
