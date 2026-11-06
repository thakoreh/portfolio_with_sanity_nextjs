import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiAmazonaws,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiJenkins,
  SiTerraform,
  SiOpentelemetry,
  SiAmazondynamodb,
  SiAwslambda,
  SiGithub,
  SiAmazonapigateway,
  SiAmazonsqs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  Bot,
  Database,
  Network,
  Workflow,
  Code2,
  Waypoints,
  Radio,
  Mail,
  Layers,
  Route,
  ClipboardCheck,
} from "lucide-react";
const technologyIcons: Record<string, { Icon: IconType; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  "Next.js": { Icon: SiNextdotjs, color: "var(--ink)" },
  React: { Icon: SiReact, color: "#61dafb" },
  "Node.js": { Icon: SiNodedotjs, color: "#68a063" },
  Python: { Icon: SiPython, color: "#e6c348" },
  AWS: { Icon: SiAmazonaws, color: "#ff9900" },
  GraphQL: { Icon: SiGraphql, color: "#e535ab" },
  MySQL: { Icon: SiMysql, color: "#66a2be" },
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },
  Git: { Icon: SiGit, color: "#f05032" },
  GitHub: { Icon: SiGithub, color: "var(--ink)" },
  Jenkins: { Icon: SiJenkins, color: "#d87d79" },
  Terraform: { Icon: SiTerraform, color: "#a482f5" },
  OpenTelemetry: { Icon: SiOpentelemetry, color: "#f5ab3a" },
  DynamoDB: { Icon: SiAmazondynamodb, color: "#6092d5" },
  "AWS Lambda": { Icon: SiAwslambda, color: "#f3a241" },
  "API Gateway": { Icon: SiAmazonapigateway, color: "#d56d9c" },
  "Amazon SQS": { Icon: SiAmazonsqs, color: "#d173aa" },
  HTML: { Icon: SiHtml5, color: "#e34f26" },
  CSS: { Icon: SiCss3, color: "#1572b6" },
};
const neutralIcons = {
  "AI agents": Bot,
  MCP: Network,
  Automation: Workflow,
  "CI/CD": Workflow,
  "AI workflows": Workflow,
  SQL: Database,
  "Sanity CMS": Database,
  EventBridge: Waypoints,
  "Amazon SNS": Radio,
  "Amazon SES": Mail,
  CodePipeline: Workflow,
  CloudFormation: Layers,
  "REST APIs": Route,
  "LLM evaluation": ClipboardCheck,
};
export default function TechIcon({
  name,
  size = 18,
}: {
  name: string;
  size?: number;
}) {
  const entry = technologyIcons[name];
  if (entry)
    return (
      <entry.Icon
        aria-hidden="true"
        size={size}
        style={{ color: entry.color }}
      />
    );
  const Icon = neutralIcons[name as keyof typeof neutralIcons] || Code2;
  return <Icon aria-hidden="true" size={size} className="tech-icon-neutral" />;
}
