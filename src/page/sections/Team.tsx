import { motion } from "motion/react";
import Container from "@/components/custom/Container";
import SectionTitle from "@/components/custom/SectionTitle";
import person1 from "@/assets/team/person1.png";
import person2 from "@/assets/team/person2.png";
import person3 from "@/assets/team/person3.png";
import person4 from "@/assets/team/person4.png";

const teamMembers = [person2, person1, person3, person4];

const Team = () => {
    return (
        <section className="bg-primary-foreground py-20">
            <Container>
                <SectionTitle
                    title="Meet our Team"
                    highlight="Team"
                    description="All our technicians are fully qualified and licensed. Moreover, they are incredibly skillful and proficient in various aspects of computer repair."
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {teamMembers.map((person, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden rounded-lg"
                        >
                            <img
                                src={person}
                                alt={`Team Member ${index + 1}`}
                                className="w-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Team;
