import Container from "../custom/Container";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const Navbar = () => {
    return (
        <Container asChild>
            <motion.header
                className="flex justify-between items-center min-h-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                <h4 className="text-xl">iRepair</h4>
                <nav className="flex items-center gap-3">
                    <ul className="flex gap-3">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Service</li>
                    </ul>
                    <Button>Login</Button>
                </nav>
            </motion.header>
        </Container>
    );
};

export default Navbar;
