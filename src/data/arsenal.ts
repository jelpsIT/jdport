export interface ScriptItem {
    name: string;
    lang: 'PS1' | 'PY' | 'CS' | 'BASH' | 'OTHER';
    size: string;
    classification: 'Classified' | 'Public' | 'Restricted';
}

export interface MissionLog {
    id: string;
    title: string;
    location: string;
    year: string;
    status: 'Active' | 'Completed' | 'Archived';
    tags: string[];
    summary: string;
}
// SKILL CATEGORIES
export const SKILL_CLUSTERS = [
    {
        category: 'Identity & Security',
        skills: [
            'Microsoft Purview', 'Entra ID P2', 'Conditional Access', 'Token Theft Protection',
            'Passwordless Authentication', 'Windows Hello for Business', 'BYOD / Mobile Device Management',
            'Intune MAM', 'Kerberos', 'PKI / NDES', 'Firewalls (FortiNet/Cisco/Unifi)', 'Avanan',
            'KnowB4', 'Microsoft Secure Score', 'ASR Rules', 'Cybersecurity', 'Reverse Engineering',
            'Kali Linux', 'Patch Management', 'Zero Trust Architecture', 'Device Blocking', 'Passwordless Diagrams'
        ]
    },
    {
        category: 'Cloud & Infrastructure',
        skills: [
            'Microsoft 365', 'Azure', 'Intune', 'Zscaler', 'Mimecast', 'Windows Server', 'Hyper-V',
            'Cove Data Protection', 'N-Able RMM', 'DNS / DHCP', 'Ubiquiti / WiFi', 'MacOS / Ubuntu',
            'Windows 10/11', 'SharePoint', 'ConnectWise', 'Automated Onboarding Workflows', 'Mimecast Digests'
        ]
    },
    {
        category: 'Development & Automation',
        skills: [
            'Python', 'PowerShell', 'C# / C++', 'Java / Ruby', 'CSS / JSON', 'REST APIs',
            'Microsoft Graph API', 'Web Development', 'Process Automation', 'RAG Pipelines',
            'Freshservice Automation', 'API Development', '2026 Scripts'
        ]
    },
    {
        category: 'IT Operations & Management',
        skills: [
            'ITSM (Freshservice)', 'Exclaimer', 'Project Management', 'Asset Management',
            'Onboarding/Offboarding', 'Documentation', '1st-3rd Line Support', 'Incident Management',
            'Data Compliance', 'Workflow Management', 'Phone System Admin'
        ]
    }
];
export const MISSION_LOGS: MissionLog[] = [
    // === NEW 2026 PROJECTS ===
{
    id: 'OP-2026-DEVICE-BLOCK',
    title: 'Device Blocking via Conditional Access',
    location: 'Global Identity',
    year: '2026',
    status: 'Active',
    tags: ['Conditional Access', 'BYOD', 'Security'],
    summary: 'Implemented strict device compliance policies to block non-compliant and personal devices from accessing corporate resources.'
},
{
    id: 'OP-2026-ENTRA-P2',
    title: 'Entra ID P2 Implementation',
    location: 'Identity & Access',
    year: '2026',
    status: 'Completed',
    tags: ['Entra ID', 'P2', 'Security'],
    summary: 'Deployed Entra ID P2 features including Identity Protection, risk-based Conditional Access, and Privileged Identity Management.'
},
{
    id: 'OP-2026-MAM',
    title: 'Mobile Application Management (MAM)',
    location: 'Endpoint Security',
    year: '2026',
    status: 'Completed',
    tags: ['Intune', 'MAM', 'Mobile'],
    summary: 'Rolled out Intune Mobile Application Management policies to protect corporate data on unmanaged and personal devices.'
},
{
    id: 'OP-2026-MIMECAST',
    title: 'Mimecast Digests & Security',
    location: 'Email Security',
    year: '2026',
    status: 'Completed',
    tags: ['Mimecast', 'Email', 'Security'],
    summary: 'Deployed Mimecast for advanced email security, digest reports, and enhanced phishing protection across the organization.'
},
{
    id: 'OP-2026-PASSWORDLESS',
    title: 'Passwordless Authentication Diagrams',
    location: 'Identity Architecture',
    year: '2026',
    status: 'Completed',
    tags: ['Passwordless', 'FIDO2', 'Diagrams'],
    summary: 'Designed and documented passwordless authentication architecture using FIDO2 security keys and Windows Hello for Business.'
},
{
    id: 'OP-2026-WHFB',
    title: 'Windows Hello for Business Adoption',
    location: 'Global Identity',
    year: '2026',
    status: 'Completed',
    tags: ['WHfB', 'Biometrics', 'Passwordless'],
    summary: 'Led organization-wide adoption of Windows Hello for Business with TPM-backed biometric authentication for 500+ users.'
},
{
    id: 'OP-2026-ZSCALER',
    title: 'Zscaler Deployment',
    location: 'Network Security',
    year: '2026',
    status: 'Active',
    tags: ['Zscaler', 'Zero Trust', 'Network'],
    summary: 'Deployed Zscaler for secure internet access and private application access with Zero Trust network access (ZTNA).'
},
{
    id: 'OP-2026-ONBOARDING',
    title: 'Automated Onboarding Workflows',
    location: 'HR/IT Ops',
    year: '2026',
    status: 'Completed',
    tags: ['Automation', 'PowerShell', 'Workflow'],
    summary: 'Built fully automated new-starter provisioning workflows including AD accounts, licenses, hardware dispatch, and welcome documentation.'
},
{
    id: 'OP-2026-SCRIPTS',
    title: '2026 Scripts & Automation Library',
    location: 'R&D',
    year: '2026',
    status: 'Active',
    tags: ['PowerShell', 'Python', 'Automation'],
    summary: 'Developing and maintaining a growing library of 2026 automation scripts for device management, reporting, and security hardening.'
},
	{
        id: 'OP-SENTINEL-AI',
        title: 'Project Sentinel: AI RAG',
        location: 'R&D',
        year: '2025',
        status: 'Active',
        tags: ['Llama 3.1', 'Vector DB', 'Automation'],
        summary: 'Independent integration of local RAG pipeline using ChromaDB. Indexing 5 years of helpdesk tickets to automate L1 responses and trend analysis.'
    },
    {
        id: 'OP-LEAD-FORENSICS-ENG',
        title: 'IT Support Projects Engineer',
        location: 'Lead Forensics (Hybrid)',
        year: '2023 - Present',
        status: 'Active',
        tags: ['Project Mgmt', 'Automation', 'Infrastructure'],
        summary: 'Driving IT projects and support for global operations. Specializing in workflow management, Freshservice automation, MDM deployment, and data compliance.'
    },
    {
        id: 'OP-SEC-HARDENING',
        title: 'Global Security Posture (Secure Score)',
        location: 'InfoSec',
        year: '2025',
        status: 'Completed',
        tags: ['Hardening', 'ASR Rules', 'Compliance'],
        summary: 'Executed strategic plan to increase Microsoft Secure Score. Implemented ASR rules (Audit/Block), USB storage blocking, and legacy auth suppression across estate.'
    },
    {
        id: 'OP-SAAS-OPTI',
        title: 'Email Security Initiatives',
        location: 'Global Ops',
        year: '2025',
        status: 'Completed',
        tags: ['Exclaimer', 'Avanan', 'KnowB4'],
        summary: 'Rolled out Avanan for email security, Exclaimer for standardized automated signatures, and KnowB4 for phishing simulation. Standardized distro groups and retention.'
    },
    {
        id: 'OP-RMM-OVERHAUL',
        title: 'N-Able RMM & Cove Backup',
        location: 'Global Ops',
        year: '2025',
        status: 'Completed',
        tags: ['N-Able', 'Patching', 'Backup'],
        summary: 'Managed N-Able RMM for 1000+ endpoints (Linux/Windows). Deployed Cove Data Protection for OneDrive/Server adoption. Automated stale account detection scripts.'
    },
    {
        id: 'OP-WHFB-MOD',
        title: 'Windows Hello Modernization',
        location: 'Global Identity',
        year: '2025',
        status: 'Active',
        tags: ['Identity', 'Biometrics', 'Kerberos'],
        summary: 'Architecting passwordless auth framework using Cloud Kerberos Trust. Enforcing TPM-backed biometric login for 500+ users.'
    },
    {
        id: 'OP-SIEM-DEPLOY',
        title: 'SIEM Implementation',
        location: 'Security Ops',
        year: '2025',
        status: 'Completed',
        tags: ['Security', 'Logging', 'Splunk/Sentinel'],
        summary: 'Deployed Centralized Log Management and SIEM for threat detection. Ingesting logs from Firewalls, DC\'s, and Endpoints for real-time analysis.'
    },
    {
        id: 'OP-FORTINET-IPS',
        title: 'FortiNet IPS & Web Filter',
        location: 'Network Ops',
        year: '2025',
        status: 'Completed',
        tags: ['Network', 'Security', 'FortiOS'],
        summary: 'Implemented Intrusion Prevention System (IPS) and Web Filtering across global office firewalls. Tuned policies for business continuity vs security.'
    },
    {
        id: 'OP-SEC-MIG-25',
        title: 'ESET Migration from Bitdefender',
        location: 'Global Endpoints',
        year: '2025',
        status: 'Completed',
        tags: ['PowerShell', 'Intune', 'Win32 App'],
        summary: 'Displaced Bitdefender with zero downtime. Engineered custom "Zombie State" registry flags to bypass Intune detection loops and force silent removal.'
    },
    {
        id: 'OP-WIN11-FFU',
        title: 'Win11 FFU Automation',
        location: 'Global Endpoint',
        year: '2025',
        status: 'Completed',
        tags: ['Automation', 'Imaging', 'PowerShell'],
        summary: 'Developed Full Flash Update (FFU) automation for rapid Windows 11 imaging via USB. Reduced build time from 2 hours to 15 minutes.'
    },
    {
        id: 'OP-DATA-GOV',
        title: 'Data Governance & Compliance',
        location: 'Legal/IT',
        year: '2024',
        status: 'Completed',
        tags: ['Retention', 'Purview', 'Litigation Hold'],
        summary: ' implemented Data Retention policies and Litigation Holds. Migrated File Shares to SharePoint to satisfy SARs and compliance requirements.'
    },
    {
        id: 'OP-LEAD-FORENSICS-SNR',
        title: 'Senior IT Systems Administrator',
        location: 'Lead Forensics (Portsmouth)',
        year: '2021 - 2023',
        status: 'Completed',
        tags: ['SysAdmin', 'Cybersecurity', 'Office 365'],
        summary: 'Managed IT systems for a major B2B data provider. Focus on cybersecurity, incident management, Office 365 administration, and backup/recovery systems.'
    },
    {
        id: 'OP-PORTSMOUTH-ADMIN',
        title: 'IT Administrator',
        location: 'City of Portsmouth',
        year: '2020 - 2021',
        status: 'Completed',
        tags: ['SysAdmin', 'Hardware', 'Helpdesk'],
        summary: '1st Line IT Administrator managing 500+ users across UK & USA offices. Supported Windows 10/Server 2016, Mac OS, and enterprise hardware.'
    },
    {
        id: 'OP-ZAMBIA-2022',
        title: 'Voluntary Work: Zambia',
        location: 'Chingola, Zambia',
        year: '2022',
        status: 'Completed',
        tags: ['Volunteering', 'Education', 'Hardware Repair'],
        summary: 'Repaired laptops and taught IT classes at Ipalo Christian School. Diagnosed hardware issues, re-pasted thermal components, and installed educational resources.'
    },
    {
        id: 'OP-SHAREPOINT-MIG',
        title: 'SharePoint Cloud Migration',
        location: 'UK HQ',
        year: '2024',
        status: 'Completed',
        tags: ['Migration', 'Data Governance', 'SharePoint'],
        summary: 'Migrated 10TB+ file share ecosystem to SharePoint Online. Implemented sensitivity labels and retention policies for compliance.'
    },
    {
        id: 'OP-HYPERV-UPG',
        title: 'Hyper-V Cluster Upgrade',
        location: 'Data Center',
        year: '2024',
        status: 'Completed',
        tags: ['Virtualization', 'Infrastructure', 'Migration'],
        summary: 'Executed V1 to V2 automated upgrade for Hyper-V clusters. Migrated critical Sage/SQL workloads with minimal disruption during maintenance windows.'
    },
    {
        id: 'OP-ONBOARDING-AUTO',
        title: 'Zero-Touch Onboarding',
        location: 'HR/IT Ops',
        year: '2024',
        status: 'Completed',
        tags: ['Automation', 'Workflow', 'PowerShell'],
        summary: 'End-to-end automation of new starter provisioning. Orchestrated AD creation, license assignment, and hardware dispatch notices via unified workflow.'
    },
    {
        id: 'OP-OFFBOARDING-AUTO',
        title: 'Zero-Touch Offboarding',
        location: 'HR/IT Ops',
        year: '2024',
        status: 'Completed',
        tags: ['Automation', 'Security', 'Compliance'],
        summary: 'Automated leaver process to ensure instant access revocation. Orchestrated account disablement, email forwarding, and license reclamation to maintain data security.'
    },
    {
        id: 'OP-DISASTER-REC',
        title: 'Disaster Recovery Framework',
        location: 'Global Compliance',
        year: '2024',
        status: 'Completed',
        tags: ['DR', 'Governance', 'RTO/RPO'],
        summary: 'Architected comprehensive DR policies. Defined critical RTO/RPO metrics and validated recovery paths for core business infrastructure.'
    },
    {
        id: 'OP-PHOENIX-RELOC',
        title: 'Project Phoenix: USA Relocation',
        location: 'Phoenix, AZ',
        year: '2022',
        status: 'Completed',
        tags: ['Infrastructure', 'Server Rebuild', 'Audit'],
        summary: 'Executed total office relocation for US HQ. Rebuilt server infrastructure, audited 200+ hardware nodes, and established new network topology with zero data loss.'
    },
    {
        id: 'OP-COVID-SHIELD',
        title: 'Operation COVID Shield',
        location: 'Global Remote',
        year: '2020',
        status: 'Completed',
        tags: ['Intune', 'Autopilot', 'Crisis Ops'],
        summary: 'Emergency deployment of Microsoft Intune across 350+ endpoints to enable secure hybrid work. Configured conditional access policies and autopilot profiles.'
    },
    {
        id: 'OP-WEBEO-MKT',
        title: 'Marketing Executive',
        location: 'Webeo',
        year: '2019',
        status: 'Completed',
        tags: ['Marketing', 'B2B', 'Analytics'],
        summary: 'Executed B2B marketing strategies for website personalization software. Focused on lead generation and data-driven customer targeting.'
    }
];
