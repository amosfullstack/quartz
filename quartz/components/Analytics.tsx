// quartz/components/Analytics.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Analytics: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-STRS3QKF3Y"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // ===== ENHANCED ANALYTICS FOR EXAM SITE =====
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced configuration
            gtag('config', 'G-STRS3QKF3Y', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              transport_type: 'beacon'
            });

            // ===== SMART COURSE DETECTION =====
            function detectCourseAndTrack() {
              const path = window.location.pathname;
              const title = document.title;
              
              // Detect specific courses
              if (/CP215|JAVA/i.test(path + title)) {
                gtag('event', 'course_view', {
                  course_code: 'CP215',
                  course_name: 'JAVA Programming',
                  academic_year: title.match(/(\\\\d{4})[-–](\\\\d{4})/)?.[0] || 'unknown'
                });
                return 'JAVA_CP215';
              }
              
              if (/CP226|OS|Operating/i.test(path + title)) {
                gtag('event', 'course_view', {
                  course_code: 'CP226', 
                  course_name: 'Operating Systems',
                  academic_year: title.match(/(\\\\d{4})[-–](\\\\d{4})/)?.[0] || 'unknown'
                });
                return 'OS_CP226';
              }
              
              if (/CP224|DATABASE|DBMS/i.test(path + title)) {
                gtag('event', 'course_view', {
                  course_code: 'CP224',
                  course_name: 'Database Management',
                  academic_year: title.match(/(\\\\d{4})[-–](\\\\d{4})/)?.[0] || 'unknown'
                });
                return 'DBMS_CP224';
              }
              
              if (/CP213|DSA|DATA.STRUCT/i.test(path + title)) {
                gtag('event', 'course_view', {
                  course_code: 'CP213',
                  course_name: 'Data Structures & Algorithms',
                  academic_year: title.match(/(\\\\d{4})[-–](\\\\d{4})/)?.[0] || 'unknown'
                });
                return 'DSA_CP213';
              }
              
              return 'OTHER';
            }

            // ===== EXAM-SPECIFIC TRACKING =====
            function trackExamEngagement() {
              const isExamContent = /exam|question|test|paper|UE|SUP/i.test(document.title);
              if (isExamContent) {
                gtag('event', 'exam_content_view', {
                  content_type: 'exam_paper',
                  page_title: document.title.substring(0, 100),
                  timestamp: new Date().toISOString()
                });
              }
            }

            // ===== DOWNLOAD TRACKING =====
            function setupDownloadTracking() {
              document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (link && link.href) {
                  // Track study material downloads
                  if (link.href.match(/\\\\.(pdf|docx|txt)$/i)) {
                    gtag('event', 'study_material_download', {
                      file_type: link.href.split('.').pop(),
                      file_name: link.href.split('/').pop()?.substring(0, 50),
                      course: detectCourseAndTrack()
                    });
                  }
                }
              });
            }

            // ===== ENGAGEMENT TRACKING =====
            function trackEngagement() {
              // Scroll depth tracking
              let maxScroll = 0;
              window.addEventListener('scroll', function() {
                const depth = Math.round((window.scrollY / document.body.scrollHeight) * 100);
                if (depth > maxScroll && depth % 25 === 0) {
                  maxScroll = depth;
                  gtag('event', 'scroll_depth', {
                    depth_percentage: depth,
                    course: detectCourseAndTrack()
                  });
                }
              }, { passive: true });

              // Time-based engagement
              let engageCheck = setTimeout(() => {
                gtag('event', 'page_engagement', {
                  engagement_time: 30,
                  page_path: window.location.pathname
                });
              }, 30000);
            }

            // ===== SPA NAVIGATION SUPPORT =====
            function setupSPATracking() {
              let currentPath = window.location.pathname;
              
              document.addEventListener('nav', function() {
                // Only track if path actually changed
                if (window.location.pathname !== currentPath) {
                  currentPath = window.location.pathname;
                  
                  // Update page view for SPA
                  gtag('config', 'G-STRS3QKF3Y', {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: window.location.pathname
                  });
                  
                  // Track the navigation
                  gtag('event', 'page_view', {
                    page_title: document.title,
                    page_location: window.location.href
                  });
                  
                  // Track course and exam data for new page
                  setTimeout(() => {
                    detectCourseAndTrack();
                    trackExamEngagement();
                  }, 100);
                }
              });
            }

            // ===== PERFORMANCE OPTIMIZATIONS =====
            function optimizeTracking() {
              // Use beacon API for better performance
              if (navigator.sendBeacon) {
                window.addEventListener('beforeunload', function() {
                  const sessionData = new Blob([
                    JSON.stringify({
                      event: 'session_end',
                      timestamp: new Date().toISOString(),
                      course: detectCourseAndTrack()
                    })
                  ], { type: 'application/json' });
                  
                  navigator.sendBeacon('https://www.google-analytics.com/g/collect', sessionData);
                });
              }

              // Device and connection info
              if (navigator.connection) {
                gtag('event', 'device_info', {
                  effective_connection: navigator.connection.effectiveType,
                  device_memory: navigator.deviceMemory || 'unknown',
                  is_mobile: /Mobi|Android/i.test(navigator.userAgent)
                });
              }
            }

            // ===== INITIALIZATION =====
            function initEnhancedAnalytics() {
              console.log('🎯 Enhanced Exam Analytics Initialized');
              
              // Initial tracking
              detectCourseAndTrack();
              trackExamEngagement();
              
              // Setup event listeners
              setupDownloadTracking();
              setupSPATracking();
              trackEngagement();
              optimizeTracking();
            }

            // Start analytics
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initEnhancedAnalytics);
            } else {
              initEnhancedAnalytics();
            }

            console.log('✅ Enhanced Analytics Loaded for G-STRS3QKF3Y');
          `,
        }}
      />
    </>
  )
}

// Optional: Add CSS if needed for any analytics UI elements
Analytics.css = `
.analytics-debug {
  display: none;
}
/* Add any analytics-related styles here */
`

export default (() => Analytics) satisfies QuartzComponentConstructor