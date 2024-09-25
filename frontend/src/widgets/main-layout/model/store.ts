import { create } from "zustand";

type State = {
  title: string,
  path: string
}

type Action = {
  updatePath: (path: State['path'], title: State['title']) => void
}

const useNavStore = create<State & Action>((set) => ({
  path: '/',
  title: 'Overview',
  updatePath: (path, title) => { 
    set({ path, title })
  }
}))

export default useNavStore