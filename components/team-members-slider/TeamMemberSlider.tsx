import Image from "next/image";
import styles from "./styles.module.scss";
import membersList from "@app/api/membersList.json";
import TeamMemberCard from "./team-member-card/TeamMemberCard";
import CommonSlider from "@components/common/slider/Slider";
import useMediaQuery from "@hooks/useMediaQuery";

const TeamMemberSlider = () => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles.memberList}>
      <CommonSlider
        title={
          isMobile
            ? "Meet our team"
            : "Clients Feedback Meet the frontline SDRs driving  revenue at LeadWise"
        }
        isMembers
      >
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
      </CommonSlider>
    </div>
  );
};

export default TeamMemberSlider;
