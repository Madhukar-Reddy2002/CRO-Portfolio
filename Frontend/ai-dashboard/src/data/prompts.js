export const prompts = [
  {
    id: 1,
    title: "System Design — Scalable API",
    category: "System Design",
    content: `You are a senior software architect. Design a scalable REST API for [system]. Include: endpoints, auth strategy, rate limiting, DB schema, and caching layer. Output as a structured technical spec.`,
  },
  {
    id: 2,
    title: "Debug Like a Senior Dev",
    category: "Debugging",
    content: `I have a bug in my [language] code. Here's the error: [error]. Here's the code: [code]. Diagnose the root cause, explain why it happens, and give a fixed version with comments.`,
  },
  {
    id: 3,
    title: "CRO Hypothesis Builder",
    category: "CRO Insights",
    content: `Act as a CRO specialist. Given this page data: [data], identify the top 3 friction points and generate A/B test hypotheses using the format: IF [change] THEN [outcome] BECAUSE [reason].`,
  },
  {
    id: 4,
    title: "Learn Any Concept Fast",
    category: "Learning",
    content: `Teach me [concept] using the Feynman technique. Start with a simple analogy, then go deeper. End with 3 practical exercises and a mental model I can reuse.`,
  },
  {
    id: 5,
    title: "Automation Pipeline Design",
    category: "Automation",
    content: `Design an automation pipeline for [task]. Include: trigger, steps, tools, error handling, and monitoring. Output as a numbered workflow with tool recommendations per step.`,
  },
  {
    id: 6,
    title: "Code Review — Senior Mode",
    category: "Debugging",
    content: `Review the following code as a senior engineer. Check for: bugs, performance issues, security holes, readability, and scalability. Be direct and prioritize by severity. Code: [code]`,
  },
  {
    id: 7,
    title: "GA4 Funnel Analysis Prompt",
    category: "CRO Insights",
    content: `You are a GA4 analytics expert. Analyze this funnel data: [data]. Identify drop-off points, session patterns, and device breakdown anomalies. Output: findings + 3 actionable recommendations.`,
  },
  {
    id: 8,
    title: "Build a Learning Roadmap",
    category: "Learning",
    content: `Create a 30-day learning roadmap for [skill]. Structure it as Week 1-4 with daily goals, resources (free first), and a capstone project. Tailor for someone with [current level] background.`,
  },
  {
    id: 9,
    title: "ETL Pipeline Architect",
    category: "Automation",
    content: `Design an ETL pipeline from [source] to [destination]. Include: extraction method, transformation logic, loading strategy, scheduling, and failure recovery. Tech stack: [stack].`,
  },
]