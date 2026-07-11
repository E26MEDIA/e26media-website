import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const PROCESS = [
  { step: "Assess", description: "Audit current infrastructure, workloads, costs, security posture, and compliance requirements." },
  { step: "Plan", description: "Migration roadmap, architecture diagrams, risk mitigation, downtime windows, and rollback strategy." },
  { step: "Migrate", description: "Phased workload migration with testing at each stage — databases, apps, storage, and DNS cutover." },
  { step: "Secure", description: "IAM policies, encryption, firewall rules, backup automation, and monitoring alerts." },
  { step: "Optimise", description: "Right-size instances, reserved capacity, CDN configuration, and cost monitoring dashboards." },
  { step: "Support", description: "Managed monitoring, patch management, incident response, and quarterly architecture reviews." },
];

export const CLOUD_SOLUTIONS_PILLAR: ServicePillar = {
  slug: "cloud-solutions",
  metaTitle: "Cloud Solutions Company in Mangalore & Karnataka — AWS, Azure, GCP | E26 Media",
  metaDescription:
    "Cloud migration, hosting, backup, and managed infrastructure in Mangalore. AWS, Azure, and Google Cloud expertise for Karnataka businesses scaling securely.",
  hero: {
    badge: "Cloud Solutions",
    title: "Cloud infrastructure that scales with your business",
    highlight: "scales with your business",
    description:
      "Migration, hosting, backup, and managed cloud on AWS, Azure, and Google Cloud — engineered for uptime, security, and predictable costs.",
  },
  intro: [
    "On-premise servers and ad-hoc hosting create risk: unexpected downtime, security gaps, spiralling maintenance costs, and no clear path to scale when your business grows. Karnataka businesses — from retail chains and manufacturers to SaaS startups — increasingly need cloud infrastructure that is reliable, monitored, and cost-efficient.",
    "E26 Media delivers cloud solutions from our Mangalore head office: migration planning and execution, managed hosting, automated backup and disaster recovery, and architecture design on AWS, Microsoft Azure, and Google Cloud Platform. We work alongside our software development team so your applications and infrastructure are designed together — not bolted on after launch.",
    "Whether you are moving a legacy ERP off a local server, hosting a new web application, or building a multi-region deployment for international clients, we provide fixed-scope quotes, documented handover, and ongoing managed support options.",
  ],
  sections: [
    {
      heading: "Why Karnataka businesses move to the cloud",
      paragraphs: [
        "Power outages, hardware failures, and limited IT staff make on-premise infrastructure fragile for growing companies. Cloud platforms offer redundant data centres, automated backups, elastic scaling during peak demand, and pay-as-you-grow pricing that avoids large upfront capital expenditure.",
        "For software products and ecommerce stores, cloud hosting directly affects customer experience — slow pages during traffic spikes cost sales. CDN-backed deployments, auto-scaling groups, and managed databases keep performance stable without manual intervention at 2 AM.",
        "Compliance and security requirements in finance, healthcare, and corporate sectors also push teams toward cloud providers with certified data centres, encryption at rest and in transit, and audit-ready logging — capabilities that are expensive to replicate on local hardware.",
      ],
    },
    {
      heading: "Cloud services we deliver",
      paragraphs: [
        "Cloud migration — assess existing servers and applications, plan phased migration with minimal downtime, execute database and workload transfers, and validate performance post-cutover.",
        "Cloud hosting and managed infrastructure — production and staging environments, load balancers, SSL, domain configuration, and 24/7 monitoring with alerting.",
        "AWS solutions — EC2, RDS, S3, Lambda, CloudFront, and IAM architecture tailored to your workload; cost optimisation with reserved instances and rightsizing.",
        "Azure solutions — App Service, Azure SQL, Blob Storage, and Active Directory integration for Microsoft-centric enterprises.",
        "Google Cloud solutions — Compute Engine, Cloud SQL, Cloud Storage, and GKE for containerised applications.",
        "Backup and disaster recovery — automated snapshots, cross-region replication, tested restore procedures, and documented RTO/RPO targets.",
      ],
    },
    {
      heading: "Our cloud migration and architecture approach",
      paragraphs: [
        "We never lift-and-shift blindly. Discovery maps every workload: dependencies, data volumes, peak traffic, compliance constraints, and acceptable downtime windows. A migration runbook sequences moves from least risky (static assets) to most critical (transactional databases) with rollback plans at each step.",
        "Security is configured before go-live: least-privilege IAM roles, VPC segmentation, encryption keys, WAF rules where needed, and secrets management — not default open ports left from a rushed migration.",
        "Post-migration, we establish monitoring dashboards for CPU, memory, disk, error rates, and cost anomalies. Many clients engage us for quarterly reviews to eliminate waste and plan capacity ahead of seasonal peaks.",
      ],
    },
    {
      heading: "Cloud for software and web applications",
      paragraphs: [
        "Applications built by E26 Media — supermarket management systems, restaurant apps, ecommerce platforms, and corporate websites — deploy to cloud environments we design and maintain. This unified delivery means developers and infrastructure engineers share context: deployment pipelines, environment variables, and scaling policies are defined during build, not after launch.",
        "We support containerised deployments (Docker, Kubernetes on GKE/EKS), serverless functions for event-driven workloads, and traditional VM-based stacks where legacy software requires it. Stack choice follows your application's needs and your team's operational capacity.",
      ],
    },
    {
      heading: "Industries we support with cloud solutions",
      paragraphs: [
        "Retail and ecommerce — high-availability storefronts, inventory sync, and payment gateway integrations with auto-scaling during sales events.",
        "Manufacturing and logistics — ERP hosting, production dashboards, and secure B2B portals with reliable uptime.",
        "Healthcare and finance — encrypted storage, access controls, and backup policies aligned to data sensitivity.",
        "Startups and SaaS — cost-efficient staging environments, CI/CD pipelines, and architecture that scales from MVP to thousands of users.",
        "Corporate and NGOs — website hosting, email and file storage migration, and hybrid cloud strategies where some workloads remain on-premise.",
      ],
    },
    {
      heading: "Why choose E26 Media for cloud solutions",
      paragraphs: [
        "We combine cloud engineering with application development — one team accountable for how your software runs in production, not two vendors pointing fingers during an outage.",
        "Mangalore-based with Karnataka-wide delivery: on-site discovery when needed, remote monitoring and support always. Transparent pricing bands and milestone-based migration projects reduce the risk of open-ended consulting bills.",
        "You retain ownership of cloud accounts, credentials, and architecture documentation. We train your team on day-two operations or offer managed support retainers for hands-off peace of mind.",
      ],
    },
    {
      heading: "AWS cloud architecture for growing businesses",
      paragraphs: [
        "Amazon Web Services remains the default choice for many Karnataka businesses scaling web applications, APIs, and data workloads. EC2 provides flexible compute; RDS and Aurora handle relational databases with automated backups; S3 stores assets and backups cheaply at scale; CloudFront accelerates content delivery to users in India and abroad; Lambda runs event-driven tasks without idle server cost.",
        "We design VPC layouts that separate public-facing load balancers from private application tiers and databases. Security groups restrict traffic to required ports only. IAM roles grant applications least-privilege access — no long-lived root keys embedded in code repositories.",
        "Cost control on AWS requires active management: reserved instances or savings plans for steady workloads, spot instances for batch jobs, S3 lifecycle policies moving cold data to cheaper tiers, and CloudWatch alarms when spend exceeds budget thresholds. Our managed cloud retainers include monthly cost review so bills do not surprise you after a traffic spike.",
        "Clients hosting ecommerce, SaaS dashboards, and custom ERP modules on AWS benefit from auto-scaling groups that add capacity during peak hours and scale down overnight — paying only for what you use while maintaining sub-second response times for customers in Mangalore, Bengaluru, and international markets.",
      ],
    },
    {
      heading: "Microsoft Azure and Google Cloud when they fit better",
      paragraphs: [
        "Azure integrates naturally with organisations already on Microsoft 365, Active Directory, and .NET application stacks. App Service deploys web APIs quickly; Azure SQL mirrors familiar SQL Server operations; Blob Storage handles documents and media; Azure DevOps pipelines connect build and release to infrastructure provisioning.",
        "Google Cloud Platform excels for Kubernetes-native teams, data analytics with BigQuery, and machine learning pipelines adjacent to AI products we build for clients. GKE manages container orchestration; Cloud Run offers serverless containers; Cloud CDN pairs with global load balancing for latency-sensitive applications.",
        "We do not force a single cloud religion. During discovery we map your team's skills, existing licences, compliance requirements, and workload characteristics — then recommend AWS, Azure, GCP, or a pragmatic hybrid. Multi-cloud is reserved for cases with clear redundancy requirements, not buzzword compliance.",
      ],
    },
    {
      heading: "Cloud security, backups, and disaster recovery",
      paragraphs: [
        "Moving to cloud does not automatically make you secure — misconfigured S3 buckets and open security groups cause breaches daily. We implement encryption at rest for databases and object storage, TLS everywhere in transit, secrets stored in managed vaults rather than environment files in git, and regular patching schedules for OS and runtime dependencies.",
        "Backup strategy defines recoverability: automated daily snapshots, cross-region replication for critical databases, retention policies aligned to compliance, and quarterly restore drills that prove backups work — not just exist. Documented RTO (recovery time objective) and RPO (recovery point objective) set expectations before disaster strikes.",
        "Monitoring and alerting close the loop: uptime checks on public endpoints, disk and memory thresholds, error rate spikes in application logs, and SSL certificate expiry warnings. On-call escalation paths ensure someone responds when Mangalore business hours end but your online store still serves Australian customers.",
        "For healthcare, finance, and corporate clients in Karnataka, we align configurations with data sensitivity — access logging, role-based controls, and audit trails that support internal compliance reviews without over-engineering startups that need speed first.",
      ],
    },
    {
      heading: "Cloud migration checklist for Karnataka SMEs",
      paragraphs: [
        "Inventory every server, virtual machine, cron job, and SaaS integration touching your operations. Document dependencies — which app calls which database, which reports run overnight, which IP addresses external partners whitelist.",
        "Classify workloads by criticality and complexity: static marketing sites migrate easily; monolithic ERP databases need replication testing and cutover windows agreed with finance and operations teams.",
        "Choose migration waves: phase one might move email and file storage; phase two staging environments; phase three production databases during a planned maintenance window with rollback scripts tested in advance.",
        "Train staff on new access patterns — VPN replacements, SSO login, backup verification dashboards — before decommissioning familiar on-premise hardware. Decommission too early and panic follows the first minor incident.",
        "Post-migration optimisation runs 30–90 days: rightsizing over-provisioned instances chosen for safety, enabling autoscaling where traffic patterns justify it, and documenting runbooks your team or our managed support team follows for routine operations.",
      ],
    },
    {
      heading: "Cloud solutions across Karnataka cities",
      paragraphs: [
        "We serve businesses in Mangalore, Bengaluru, Udupi, Mysuru, Hubballi-Dharwad, and surrounding districts — combining on-site infrastructure reviews when needed with remote monitoring and support from our Kanakanady head office.",
        "Coastal businesses face monsoon season power instability that makes on-premise servers risky; cloud hosting in redundant data centres eliminates single-point-of-failure at your office rack.",
        "Bengaluru startups benefit from CI/CD pipelines and staging environments that mirror production — shipping features weekly without manual FTP uploads.",
        "Manufacturers in inland Karnataka migrate ERP and inventory systems to cloud databases accessible from factory floor tablets and head office finance teams simultaneously.",
        "Each city page on our website links cloud capabilities to local consultation — search 'cloud solutions company Mangalore' or your city and service combination to find structured information and booking paths.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Cloud Hosting Setup",
      range: "₹30,000 – ₹1,00,000",
      description: "Production environment setup, SSL, monitoring, and deployment for web apps or APIs.",
      includes: ["Environment configuration", "SSL and DNS", "Basic monitoring", "Deployment pipeline", "Documentation handover"],
    },
    {
      name: "Cloud Migration",
      range: "₹1,00,000 – ₹5,00,000",
      description: "Assessment, migration planning, and phased workload transfer from on-premise or legacy hosting.",
      includes: ["Infrastructure audit", "Migration runbook", "Phased execution", "Security hardening", "Post-migration validation"],
    },
    {
      name: "Managed Cloud",
      range: "₹15,000 – ₹50,000 / month",
      description: "Ongoing monitoring, patching, backup verification, incident response, and cost optimisation.",
      includes: ["24/7 monitoring alerts", "Monthly health reports", "Backup restore tests", "Security patches", "Architecture reviews"],
    },
  ],
  deliverables: [
    "Infrastructure assessment and migration roadmap",
    "Cloud architecture diagrams and documentation",
    "Configured production and staging environments",
    "IAM policies and security baseline",
    "Automated backup and monitoring setup",
    "Deployment runbooks and credential handover",
    "Optional managed support with SLA",
  ],
  whyChoose: [
    "AWS, Azure, and GCP experience from a Mangalore-based team",
    "Integrated with software and web development delivery",
    "Phased migration with rollback plans — not risky big-bang cutovers",
    "Cost monitoring and rightsizing to control cloud bills",
    "Security-first configuration: IAM, encryption, VPC segmentation",
    "You own cloud accounts and all credentials",
  ],
  process: PROCESS,
  portfolioSlugs: ["supermarket", "floriva-gifts", "cleanpro"],
  faqs: buildPillarFaqs("Cloud Solutions", [
    { question: "Which cloud provider do you recommend?", answer: "It depends on your existing stack, team skills, compliance needs, and budget. We assess honestly — AWS for broad ecosystem, Azure for Microsoft shops, GCP for data and Kubernetes workloads." },
    { question: "Can you migrate our website from shared hosting to cloud?", answer: "Yes. We migrate WordPress, static sites, and custom applications with DNS planning, SSL, and performance tuning on the new environment." },
    { question: "Do you provide 24/7 cloud support?", answer: "Managed support plans include monitoring and incident response with defined SLAs. Ad-hoc support is available for clients who prefer self-management." },
    { question: "Will migration cause downtime?", answer: "We plan for minimal downtime using staged cutovers, blue-green deployments, and maintenance windows agreed in advance. Critical systems get rollback procedures." },
    { question: "Can you reduce our existing cloud bill?", answer: "Yes. Rightsizing instances, reserved capacity, storage lifecycle policies, and eliminating unused resources often cut costs 20–40% without performance loss." },
    { question: "Do you host Indian data within India?", answer: "We configure region selection based on your compliance requirements. AWS, Azure, and GCP offer India regions; we advise during discovery." },
  ]),
};
