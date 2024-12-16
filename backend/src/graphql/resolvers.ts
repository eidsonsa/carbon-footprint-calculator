import { calculateHomeEnergyFootprint } from "../calculator/homeEnergy";
import { calculateTransportationFootprint } from "../calculator/transportation";
import { calculateWasteFootprint } from "../calculator/waste";
import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    transportationFootprint: (_, { input }) =>
      calculateTransportationFootprint(input),
    wasteFootprint: (_, { input }) => calculateWasteFootprint(input),
    homeEnergyFootprint: (_, { input }) => calculateHomeEnergyFootprint(input),
  },
};

export default resolvers;
