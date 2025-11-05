// Resume Configuration
// Change the activeResume value to switch between your CVs
// Only you can change this - users will always see whichever CV you select

type ResumeType = "technical" | "production";

// Change this value to switch which CV is downloaded
export const activeResume: ResumeType = "technical";

// Resume paths - these point to your actual CV files
export const resumePaths = {
  technical: "/cv/technical-cv.pdf",
  production: "/cv/production-cv.pdf",
};

// Get the current active resume path
export const getActiveResumePath = () => resumePaths[activeResume];
