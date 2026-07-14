import React from "react";

// ---------------------------------------------------------------------------
// Certifications
// To show official badge art: download each badge image from your issuer
// (e.g. Credly "Share -> Download badge image"), drop it in
// src/Assets/badges/, and set the matching filename in `image` below. Any
// cert without an image renders as a styled text badge automatically.
// ---------------------------------------------------------------------------
export const certifications = [
  {
    abbr: "A+",
    name: "CompTIA A+ ce",
    issuer: "CompTIA",
    meta: "Certified Aug 2024 · Expires Apr 2029",
    image: "",
  },
  {
    abbr: "Net+",
    name: "CompTIA Network+ ce",
    issuer: "CompTIA",
    meta: "Certified May 2025 · Expires Apr 2029",
    image: "",
  },
  {
    abbr: "Sec+",
    name: "CompTIA Security+ ce",
    issuer: "CompTIA",
    meta: "Certified Dec 2025 · Expires Apr 2029",
    image: "",
  },
  {
    abbr: "CySA+",
    name: "CompTIA CySA+ ce",
    issuer: "CompTIA",
    meta: "Certified Apr 2026 · Expires Apr 2029",
    image: "comptia-cysa-ce-certification.png",
  },
  {
    abbr: "PVE",
    name: "Proxmox VE Deployment and Management",
    issuer: "Proxmox",
    meta: "Completed Apr 2026",
    image: "",
  },
  {
    abbr: "UO",
    name: "Coding Certification",
    issuer: "University of Oregon",
    meta: "",
    image: "",
  },
  {
    abbr: "CIOS",
    name: "CompTIA IT Operations Specialist (CIOS)",
    issuer: "CompTIA · Stackable: A+ | Network+",
    meta: "May 2025",
    image: "comptia-it-operations-specialist-cios-stackable-certification.png",
  },
  {
    abbr: "CSIS",
    name: "CompTIA Secure Infrastructure Specialist (CSIS)",
    issuer: "CompTIA · Stackable: A+ | Network+ | Security+",
    meta: "Dec 2025",
    image:
      "comptia-secure-infrastructure-specialist-csis-stackable-certification.png",
  },
  {
    abbr: "CSAP",
    name: "CompTIA Security Analytics Professional (CSAP)",
    issuer: "CompTIA · Stackable: Security+ | CySA+",
    meta: "Apr 2026",
    image:
      "comptia-security-analytics-professional-csap-stackable-certification.png",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    title: "Networking & Security",
    items: [
      "Network troubleshooting",
      "VPN & remote access configuration",
      "Cybersecurity fundamentals (MFA, phishing mitigation, firewalls)",
      "Active Directory",
      "Security monitoring",
      "Incident detection & response",
      "Threat hunting",
      "Vulnerability management",
    ],
  },
  {
    title: "Systems & Infrastructure",
    items: [
      "Windows Server administration",
      "Linux & macOS support",
      "Proxmox VE virtualization",
      "Cloud services (Microsoft 365, OneDrive, SharePoint)",
    ],
  },
  {
    title: "Tools & Development",
    items: [
      "Remote support tools (Syncro, Splashtop)",
      "SQL & database queries",
      "JavaScript & APIs",
      "Basic scripting (PowerShell, Bash)",
      "IT asset management",
    ],
  },
  {
    title: "Professional",
    items: [
      "Technical documentation",
      "Customer support",
      "Time management",
      "Team mentoring",
      "Scheduling & project tools (Motion)",
    ],
  },
];
