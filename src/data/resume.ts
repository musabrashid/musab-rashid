export const profile = {
  name: "Musab Rashid",
  title: "Senior Product Analyst · Digital Insights",
  location: "Chicago, IL",
  email: "musabrashid@gmail.com",
  phone: "(713) 724-6329",
  linkedin: "https://www.linkedin.com/in/musabrashid/",
};

export type Role = {
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  location: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "United Airlines",
    location: "Chicago, IL",
    roles: [
      {
        title: "Senior Product Analyst - Digital Insights",
        start: "Mar 2025",
        end: "Present",
        bullets: [
          "Owned product analytics for United’s mobile experience across millions of monthly users, leveraging SQL, Python, and Spark to identify behavioral drivers of engagement and retention, influencing roadmap prioritization and contributing to an 18% increase in self-service adoption and 15% improvement in day-of-travel retention",
          "Own Voice of Customer, NPS, and CSAT analytics for United’s mobile app, synthesizing thousands of user feedback signals into actionable product insights that guide prioritization across Product, Engineering, and GTM teams",
          "Built a behavioral prioritization model across 17M+ user interactions, identifying the highest-impact product friction points and enabling data-driven roadmap prioritization across Product and Engineering",
          "Built and own recurring KPI reporting cadences for MileagePlus leadership, closing adoption gaps and driving a 12% lift in premium feature usage — dashboards relied on weekly to track performance against leadership targets",
        ],
      },
      {
        title: "Analyst - Operations Analytics",
        start: "Jun 2024",
        end: "Mar 2025",
        bullets: [
          "Architected a real-time support analytics pipeline with SLA monitoring, ticket workflow visibility, and data quality controls, reducing latency by 25% and improving reliability of customer-facing Agent on Demand support operations",
          "Built SQL-based analytical frameworks and dbt models/transformations on large-scale, messy datasets, standardizing metric definitions and improving decision-making speed 15% for GTM and customer ops",
          "Owned production KPI dashboards in Tableau and Palantir Foundry relied on for C-suite reporting; drove process redesign that cut manual reporting overhead 40% and improved data governance across the reporting pipeline",
        ],
      },
      {
        title: "Associate Analyst - Operations Analytics",
        start: "Jun 2023",
        end: "Jun 2024",
        bullets: [
          "Built reliability and performance measurement framework dashboards used daily by airport operations stakeholders, turning raw operational signal into decisions that improved efficiency",
          "Designed experimentation and A/B testing frameworks across 10+ airport operations environments, establishing standardized success metrics and identifying operational improvements that increased on-time departures by 3%",
        ],
      },
    ],
  },
  {
    company: "fabric",
    location: "Seattle, WA",
    roles: [
      {
        title: "Product Manager - Customer Analytics",
        start: "Aug 2021",
        end: "Dec 2022",
        bullets: [
          "Led development of a self-serve analytics product at a high-growth SaaS startup, enabling customers and CSM teams to monitor real-time adoption, health, and sentiment metrics, contributing to a reduction in churn from 17% to 8%",
          "Partnered cross-functionally with GTM, sales, and CS to close the loop between customer-reported issues and product roadmap decisions via Agile methodology",
        ],
      },
      {
        title: "Product Manager Intern - Order Management System",
        start: "May 2021",
        end: "Aug 2021",
        bullets: [
          "Built a product roadmap introducing 16 high-impact OMS features through competitor analysis and user research, driving 19% higher customer satisfaction through iterative product enhancements",
          "Defined and documented operational workflows for OMS integrations with merchant fulfillment systems, standardizing onboarding requirements and improving cross-functional handoff efficiency for B2B clients",
        ],
      },
    ],
  },
  {
    company: "Texas A&M University College of Engineering",
    location: "College Station, TX",
    roles: [
      {
        title: "Research Analyst",
        start: "Feb 2021",
        end: "Jun 2021",
        bullets: [
          "Measured KPIs on Autonomous Vehicle safety perception using Twitter data and R, translating findings into structured analytical reports and policy briefs for faculty leadership",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Material Handling and Delivery Optimization",
    org: "SpaceX",
    description:
      "Optimized site material handling for SpaceX by applying engineering principles and mathematics to a Python-based algorithm, analyzing supply chain data to boost driver throughput by 23% and ensure cost-effective, timely part delivery.",
  },
  {
    name: "Aggie Gym",
    org: "Texas A&M University",
    description:
      "Built a Microsoft Azure data pipeline using Python and SQL to analyze gym attendance and visitor time trends, creating Power BI dashboards that reduced overcrowding by 15% and improved operational efficiency.",
  },
];

export const education = {
  school: "Texas A&M University",
  location: "College Station, TX",
  degree: "B.S. in Industrial & Systems Engineering",
  end: "May 2023",
  certifications: [
    "Certification in Data Engineering and Data Center Operations",
  ],
  coursework: [
    "Uncertainty Modeling",
    "Risk Analysis",
    "Systems Thinking",
    "Data Structures",
    "Quantitative Models",
  ],
};
