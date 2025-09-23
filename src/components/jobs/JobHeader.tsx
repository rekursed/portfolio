import { Job } from "@/data/jobs";
import styles from "./JobHeader.module.css";

interface JobHeaderProps {
  job: Job;
}

export function JobHeader({ job }: JobHeaderProps) {
  return (
    <div className={styles.job_header}>
      <div className={styles.timeline_date}>{job.dates}</div>
      <h3 className={styles.job_role}>{job.role}</h3>
      <p className={styles.job_company}>{job.company}</p>
      <div className={styles.job_duration}>{job.duration}</div>
      <div className={styles.job_location}>{job.location}</div>
    </div>
  );
}