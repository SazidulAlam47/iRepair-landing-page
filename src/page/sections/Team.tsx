import Container from "@/components/custom/Container";
import SectionTitle from "@/components/custom/SectionTitle";
import person1 from "@/assets/team/person1.png";
import person2 from "@/assets/team/person2.png";
import person3 from "@/assets/team/person3.png";
import person4 from "@/assets/team/person4.png";

const Team = () => {
    return (
        <section className="bg-primary-foreground py-20">
            <Container>
                <SectionTitle
                    title="Meet our Team"
                    highlight="Team"
                    description="All our technicians are fully qualified and licensed. Moreover, theyare incredibly skillful and proficient in various aspects of computer repair."
                />
                <div className="grid grid-cols-4 gap-4 mt-8">
                    <div>
                        <img src={person2} alt="person" className="w-full" />
                    </div>
                    <div>
                        <img src={person1} alt="person" className="w-full" />
                    </div>
                    <div>
                        <img src={person3} alt="person" className="w-full" />
                    </div>
                    <div>
                        <img src={person4} alt="person" className="w-full" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Team;
