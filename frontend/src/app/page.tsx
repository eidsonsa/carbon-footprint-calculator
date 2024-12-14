import { Stack } from "@mui/material";

import BaseContainer from "@/components/BaseContainer";
import MenuCard from "@/components/MenuCard";

const Home = async () => {
  return (
    <BaseContainer title="Personal Carbon Footprint Calculator" hideHomeButton>
      <Stack gap={2}>
        <MenuCard title="Waste" emoji="🗑️" link="/waste" />
        <MenuCard title="Transportation" emoji="🚗" link="/transportation" />
      </Stack>
    </BaseContainer>
  );
};

export default Home;
