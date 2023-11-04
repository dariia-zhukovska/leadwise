import Image from "next/image";
import styles from "./styles.module.scss";
import membersList from "@app/api/membersList.json";
import TeamMemberCard from "./team-member-card/TeamMemberCard";

const TeamMemberSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      {membersList.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            image={member.image}
            memberName={member.name}
            memberDescription={member.description}
          />
        );
      })}
    </div>
  );
};

export default TeamMemberSlider;
