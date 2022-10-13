import dynamic from "next/dynamic";
import {InoButton} from "@inovex.de/elements-react";

const ImportedInoButton = dynamic(import("@inovex.de/elements-react").then(m => m.InoButton), {
  ssr: false,
}) as typeof InoButton;

function About() {
  return <ImportedInoButton>About</ImportedInoButton>
}

export default About
