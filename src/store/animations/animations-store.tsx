import { create } from "zustand";

interface State {
  startNavAnimation: boolean;
  setStartNavAnimation: (value: boolean) => void;
  startLenis: boolean;
  setStartLenis: (value: boolean) => void;

}

export const useAnimationsStore = create<State>()(
  
    (set, get) => ({
      startNavAnimation: false,
      startLenis: false,
      getStartNavAnimation: () => {
        const { startNavAnimation: startAnimation } = get();
        return startAnimation;
      },
      setStartNavAnimation: (value: boolean) => {
        set({ startNavAnimation: value });
      },
      setStartLenis: (value: boolean) => {
        set({ startLenis: value });
      },
    }),
  
);