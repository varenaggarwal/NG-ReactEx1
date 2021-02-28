import "./styles.css";
import PasswordMatching from "./Components/PasswordMatching";
import Counter from "./Components/Counter";
import CharacterCount from "./Components/CharacterCount";
import Figma from "./Components/Figma";
import AddCart from "./Components/AddCart";
import SwitchTabs from "./Components/SwitchTabs";
import ToDoList from "./Components/ToDoList";
import LikeList from "./Components/LikeList";
import { useState } from "react";
import ToastToggle from "./Components/ToastToggle";
import DarkMode from "./Components/DarKMode";

export default function App() {
  const [view, setView] = useState("Counter");
  const components = [
    "Counter",
    "CharacterCount",
    "PasswordMatching",
    "Figma",
    "AddCart",
    "SwitchTabs",
    "ToastToggle",
    "ToDoList",
    "DarkMode",
    "LikeList"
  ];
  return (
    <div className="App">
      {components.map((item) => (
        <button onClick={() => setView(item)}>{item}</button>
      ))}
      <br />
      <br />
      {/* {components.map((item) => {
        view === item && <item />;
      })} */}
      {view === "Counter" && <Counter />}
      {view === "PasswordMatching" && <PasswordMatching />}
      {view === "CharacterCount" && <CharacterCount />}
      {view === "Figma" && <Figma />}
      {view === "AddCart" && <AddCart />}
      {view === "SwitchTabs" && <SwitchTabs />}
      {view === "ToastToggle" && <ToastToggle />}
      {view === "ToDoList" && <ToDoList />}
      {view === "DarkMode" && <DarkMode />}
      {view === "LikeList" && <LikeList />}
    </div>
  );
}
