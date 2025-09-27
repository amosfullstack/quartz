// quartz/components/Analytics.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Analytics: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-STRS3QKF3Y"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // ===== OPTIMIZED ANALYTICS FOR EXAM RESOURCE SITE =====
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced configuration with custom dimensions
            gtag('config', 'G-STRS3QKF3Y', {
              page_title: document.title,
              page_location: window.location.href,
              transport_type: 'beacon',
              custom_map: {
                dimension1: 'content_type',
                dimension2: 'course_code', 
                dimension3: 'resource_category',
                dimension4: 'exam_year',
                dimension5: 'user_journey'
              }
            });

            // ===== IMPROVED COURSE DETECTION =====
            function getCurrentCourse() {
              const path = window.location.pathname.toLowerCase();
              const title = document.title.toLowerCase();
              
              // Resource hub detection
              if (path === '/java' || title.includes('java resources')) 
                return { code: 'CP215', name: 'JAVA', type: 'resource_hub' };
              if (path === '/linux' || title.includes('linux resources')) 
                return { code: 'CP211', name: 'LINUX', type: 'resource_hub' };
              if (path === '/dsa' || title.includes('dsa resources')) 
                return { code: 'CP213', name: 'DSA', type: 'resource_hub' };
              if (path === '/database' || title.includes('database resources')) 
                return { code: 'CP224', name: 'DATABASE', type: 'resource_hub' };
              if (path === '/os' || title.includes('os resources')) 
                return { code: 'CP226', name: 'OS', type: 'resource_hub' };
              
              // Exam paper detection
              if (title.includes('cp215') || title.includes('java')) 
                return { code: 'CP215', name: 'JAVA', type: 'exam_paper' };
              if (title.includes('cp211') || title.includes('linux')) 
                return { code: 'CP211', name: 'LINUX', type: 'exam_paper' };
              if (title.includes('cp213') || title.includes('dsa')) 
                return { code: 'CP213', name: 'DSA', type: 'exam_paper' };
              if (title.includes('cp224') || title.includes('database')) 
                return { code: 'CP224', name: 'DATABASE', type: 'exam_paper' };
              if (title.includes('cp226') || title.includes('operating system')) 
                return { code: 'CP226', name: 'OS', type: 'exam_paper' };
              
              // Study guide detection
              if (title.includes('study guide')) 
                return { code: 'GUIDE', name: 'Study Guide', type: 'learning_path' };
              
              return { code: 'OTHER', name: 'Other', type: 'unknown' };
            }

            // ===== RESOURCE TYPE DETECTION =====
            function getResourceType() {
              const title = document.title.toLowerCase();
              const path = window.location.pathname;
              
              if (title.includes('study guide')) return 'study_guide';
              if (title.includes('ue') || title.includes('exam')) return 'exam_paper';
              if (title.includes('solved')) return 'solved_paper';
              if (title.includes('test')) return 'test_paper';
              if (path === '/') return 'homepage';
              if (['/java','/linux','/dsa','/database','/os'].includes(path)) return 'resource_hub';
              
              return 'content_page';
            }

            // ===== ENHANCED PAGE VIEW TRACKING =====
            function trackEnhancedPageView() {
              const course = getCurrentCourse();
              const resourceType = getResourceType();
              const examYear = document.title.match(/(\\d{4})[-–](\\d{4})/)?.[0] || 'unknown';
              
              gtag('event', 'page_view_enhanced', {
                content_type: resourceType,
                course_code: course.code,
                resource_category: course.type,
                exam_year: examYear,
                page_title: document.title.substring(0, 100),
                word_count: document.body.textContent?.length || 0
              });
            }

            // ===== NAVIGATION PATH TRACKING =====
            let userJourney = [];
            let lastPage = '';
            
            function trackNavigationPath() {
              const currentPage = window.location.pathname;
              if (currentPage !== lastPage) {
                userJourney.push({
                  page: currentPage,
                  title: document.title,
                  timestamp: Date.now(),
                  time_spent: lastPage ? Date.now() - (userJourney[userJourney.length-1]?.timestamp || Date.now()) : 0
                });
                
                // Keep only last 10 pages to avoid memory issues
                if (userJourney.length > 10) userJourney.shift();
                
                lastPage = currentPage;
                
                gtag('event', 'navigation_step', {
                  current_page: currentPage,
                  journey_length: userJourney.length,
                  previous_page: userJourney.length > 1 ? userJourney[userJourney.length-2]?.page : 'entry'
                });
              }
            }

            // ===== SUBJECT NAVIGATION TRACKING =====
            function trackSubjectClicks() {
              document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (!link || !link.href) return;
                
                const href = link.href.toLowerCase();
                const linkText = link.textContent.toLowerCase();
                
                // Track subject hub clicks from navigation
                if (href.includes('/java') || href.includes('/linux') || href.includes('/dsa') || 
                    href.includes('/database') || href.includes('/os')) {
                  
                  const subject = href.split('/').pop() || 'unknown';
                  gtag('event', 'subject_navigation', {
                    event_category: 'main_nav',
                    event_label: subject.toUpperCase(),
                    source_page: window.location.pathname,
                    navigation_type: 'subject_hub'
                  });
                }
                
                // Track study guide clicks
                if (linkText.includes('study guide')) {
                  gtag('event', 'study_guide_click', {
                    event_category: 'learning_path',
                    event_label: link.textContent.trim(),
                    guide_topic: link.textContent.replace('Study Guide - ', ''),
                    source_location: window.location.pathname
                  });
                }
                
                // Track exam paper clicks from index page
                if (linkText.includes('ue') || linkText.includes('exam')) {
                  const yearMatch = link.textContent.match(/(\\d{4})[-–](\\d{4})/);
                  gtag('event', 'exam_paper_click', {
                    event_category: 'content_access',
                    event_label: link.textContent.trim(),
                    exam_year: yearMatch?.[0] || 'unknown',
                    source: 'index_page'
                  });
                }
                
                // Track solved paper indicators
                if (linkText.includes('solved')) {
                  gtag('event', 'solved_content_click', {
                    event_category: 'content_preference',
                    event_label: 'solved_paper',
                    subject: getCurrentCourse().name
                  });
                }
              });
            }

            // ===== CONTENT ENGAGEMENT TRACKING =====
            function trackContentEngagement() {
              let maxScroll = 0;
              let readStartTime = Date.now();
              let scrollTimeout;
              
              // Scroll depth with debouncing
              window.addEventListener('scroll', function() {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                  const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                  if (depth > maxScroll) {
                    maxScroll = depth;
                    
                    if (depth % 25 === 0) { // Report at 25%, 50%, 75%, 100%
                      gtag('event', 'scroll_depth', {
                        event_category: 'engagement',
                        event_label: getCurrentCourse().name,
                        depth_percentage: depth,
                        content_type: getResourceType(),
                        time_to_depth: Date.now() - readStartTime
                      });
                    }
                  }
                }, 150);
              }, { passive: true });
              
              // Time-based engagement
              const timeIntervals = [10, 30, 60, 120]; // seconds
              timeIntervals.forEach(seconds => {
                setTimeout(() => {
                  gtag('event', 'time_engagement', {
                    event_category: 'engagement',
                    event_label: 'time_on_page',
                    engagement_seconds: seconds,
                    content_type: getResourceType(),
                    course: getCurrentCourse().code
                  });
                }, seconds * 1000);
              });
            }

            // ===== RESOURCE PREFERENCE ANALYSIS =====
            function trackResourcePreferences() {
              // Track which resource types users access most
              const course = getCurrentCourse();
              if (course.type === 'resource_hub') {
                gtag('event', 'resource_hub_visit', {
                  event_category: 'content_strategy',
                  event_label: course.name,
                  hub_type: 'subject_resource_center'
                });
              }
              
              // Track if users prefer direct exam access vs hub navigation
              const cameFromIndex = document.referrer.includes(window.location.origin) && 
                                  new URL(document.referrer).pathname === '/';
              
              if (cameFromIndex) {
                gtag('event', 'direct_exam_access', {
                  event_category: 'user_behavior',
                  event_label: 'index_to_exam_direct',
                  subject: course.name
                });
              }
            }

            // ===== PERFORMANCE OPTIMIZATIONS =====
            function optimizeAnalytics() {
              // Use beacon for final event
              window.addEventListener('beforeunload', function() {
                const sessionSummary = {
                  event: 'session_summary',
                  total_pages_visited: userJourney.length,
                  session_duration: Date.now() - (userJourney[0]?.timestamp || Date.now()),
                  subjects_visited: [...new Set(userJourney.map(p => getCurrentCourse().name))],
                  final_scroll_depth: maxScroll
                };
                
                if (navigator.sendBeacon) {
                  const blob = new Blob([JSON.stringify(sessionSummary)], {type: 'application/json'});
                  navigator.sendBeacon('https://www.google-analytics.com/g/collect', blob);
                }
              });
            }

            // ===== SPA NAVIGATION SUPPORT =====
            function setupSPATracking() {
              let currentPath = window.location.pathname;
              
              // Use MutationObserver for Quartz SPA navigation
              const observer = new MutationObserver(function(mutations) {
                if (window.location.pathname !== currentPath) {
                  currentPath = window.location.pathname;
                  
                  // Small delay for DOM update
                  setTimeout(() => {
                    trackEnhancedPageView();
                    trackNavigationPath();
                    trackResourcePreferences();
                  }, 100);
                }
              });
              
              observer.observe(document.body, { 
                childList: true, 
                subtree: true,
                attributes: true,
                attributeFilter: ['class', 'id']
              });
            }

            // ===== INITIALIZATION =====
            function initEnhancedAnalytics() {
              console.log('🎯 Enhanced Exam Analytics Initialized - Tracking Resource Preferences');
              
              // Initial page load tracking
              trackEnhancedPageView();
              trackNavigationPath();
              trackResourcePreferences();
              
              // Setup event listeners
              trackSubjectClicks();
              trackContentEngagement();
              setupSPATracking();
              optimizeAnalytics();
              
              // Community engagement tracking
              gtag('event', 'community_visit', {
                event_category: 'engagement',
                event_label: 'exam_resource_community'
              });
            }

            // Start analytics
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initEnhancedAnalytics);
            } else {
              initEnhancedAnalytics();
            }

            console.log('✅ Enhanced Resource Analytics Loaded - Tracking Subject Hubs vs Direct Access');
          `,
        }}
      />
    </>
  )
}

export default (() => Analytics) satisfies QuartzComponentConstructor