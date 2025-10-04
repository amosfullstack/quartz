// components/Analytics.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Analytics: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-STRS3QKF3Y"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // ===== UNIVERSAL SUPER ANALYTICS - FUTURE PROOF =====
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Universal configuration
            gtag('config', 'G-STRS3QKF3Y', {
              page_title: document.title,
              page_location: location.href,
              transport_type: 'beacon',
              custom_map: {
                dimension1: 'content_category',
                dimension2: 'academic_level', 
                dimension3: 'resource_type',
                dimension4: 'content_freshness',
                dimension5: 'engagement_tier',
                dimension6: 'user_journey_stage',
                dimension7: 'learning_pattern'
              }
            });

            // ===== UNIVERSAL CONTEXT DETECTION =====
            function detectUniversalContext() {
              const path = window.location.pathname.toLowerCase();
              const title = document.title.toLowerCase();
              const body = document.body;
              
              // Auto-detect course codes (CPxxx, CNxxx, CTxxx)
              const courseCodeMatch = title.match(/(CP|CN|CT)\\s*\\d+/i) || 
                                    path.match(/(cp|cn|ct)\\s*\\d+/i) ||
                                    body.textContent.match(/(CP|CN|CT)\\s*\\d{3}/gi);
              const courseCode = courseCodeMatch ? courseCodeMatch[0].toUpperCase().replace(/\\s/g, '') : 'UNKNOWN';
              
              // Auto-detect academic level from course codes
              let academicLevel = 'unknown';
              if (courseCode.match(/CP1\\d{2}|CN1\\d{2}/)) academicLevel = 'first_year';
              if (courseCode.match(/CP2\\d{2}|CN2\\d{2}|CT2\\d{2}/)) academicLevel = 'second_year';
              if (courseCode.match(/CP3\\d{2}|CN3\\d{2}/)) academicLevel = 'third_year';
              
              // Auto-detect resource type from content patterns
              let resourceType = 'content_page';
              const indicators = {
                exam_paper: ['ue', 'exam', 'paper', 'question', 'assessment'],
                solved_paper: ['solved', 'solution', 'answer', 'interactive'],
                study_guide: ['study guide', 'guide', 'conquer', 'pass like'],
                test_paper: ['test', 'quiz', 'midterm'],
                resource_hub: ['resource', 'hub', 'materials', 'collection'],
                practical: ['lab', 'practical', 'exercise', 'implementation']
              };
              
              Object.entries(indicators).forEach(([type, keywords]) => {
                if (keywords.some(keyword => title.includes(keyword) || body.textContent.toLowerCase().includes(keyword))) {
                  resourceType = type;
                }
              });
              
              // Auto-detect freshness
              let freshness = 'archive';
              const currentYear = new Date().getFullYear();
              const yearMatch = title.match(/\\b(20\\d{2})[-–](20\\d{2})\\b/);
              if (yearMatch) {
                const endYear = parseInt(yearMatch[2]);
                freshness = endYear >= currentYear - 1 ? 'current' : 'archive';
              }
              
              // Auto-detect popularity markers
              const isHot = /🔥|hot|trending|popular/i.test(title + body.textContent);
              const isNew = /✨|new|recent|just added|uploaded/i.test(title + body.textContent);
              
              return {
                courseCode,
                academicLevel,
                resourceType,
                freshness,
                isHot,
                isNew,
                path,
                title: document.title
              };
            }

            // ===== UNIVERSAL EVENT CAPTURE =====
            function initUniversalEventCapture() {
              const events = {
                navigation: 0,
                content_access: 0,
                interaction: 0,
                download: 0,
                engagement: 0
              };
              
              let sessionMetrics = {
                startTime: Date.now(),
                pagesVisited: new Set([location.pathname]),
                coursesAccessed: new Set(),
                maxScrollDepth: 0,
                activeTime: 0,
                lastActivity: Date.now()
              };

              // Capture ALL clicks with intelligent classification
              document.addEventListener('click', function(e) {
                const target = e.target;
                const context = detectUniversalContext();
                
                // Universal link classification
                if (target.closest('a') && target.href) {
                  events.navigation++;
                  const linkType = classifyLink(target);
                  
                  gtag('event', 'universal_navigation', {
                    event_category: 'navigation',
                    event_label: linkType,
                    link_text: target.textContent?.substring(0, 100) || 'unknown',
                    link_destination: target.href,
                    source_context: context.resourceType,
                    navigation_count: events.navigation
                  });
                  
                  // Track course discoveries
                  const targetContext = extractContextFromURL(target.href);
                  if (targetContext.courseCode !== 'UNKNOWN') {
                    sessionMetrics.coursesAccessed.add(targetContext.courseCode);
                  }
                }
                
                // Universal content interactions
                if (isInteractiveElement(target)) {
                  events.interaction++;
                  const interactionType = classifyInteraction(target);
                  
                  gtag('event', 'universal_interaction', {
                    event_category: 'engagement',
                    event_label: interactionType,
                    element_type: target.tagName,
                    interaction_count: events.interaction,
                    course_context: context.courseCode
                  });
                }
                
                sessionMetrics.lastActivity = Date.now();
              }, true);

              // Universal scroll tracking
              let scrollTimeout;
              window.addEventListener('scroll', function() {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                  const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                  if (depth > sessionMetrics.maxScrollDepth) {
                    sessionMetrics.maxScrollDepth = depth;
                    
                    // Auto-detect reading milestones
                    if ([25, 50, 75, 90, 95, 100].includes(depth)) {
                      events.engagement++;
                      const context = detectUniversalContext();
                      
                      gtag('event', 'universal_reading_milestone', {
                        event_category: 'engagement',
                        event_label: 'scroll_depth',
                        depth_percentage: depth,
                        content_type: context.resourceType,
                        milestone_count: events.engagement,
                        time_to_milestone: Date.now() - sessionMetrics.startTime
                      });
                    }
                  }
                }, 200);
              }, { passive: true });

              // Universal time tracking
              const timeMilestones = [10, 30, 60, 120, 300, 600, 1800];
              timeMilestones.forEach(seconds => {
                setTimeout(() => {
                  const context = detectUniversalContext();
                  events.engagement++;
                  
                  gtag('event', 'universal_time_milestone', {
                    event_category: 'engagement',
                    event_label: 'time_engagement',
                    seconds_engaged: seconds,
                    content_category: context.resourceType,
                    academic_level: context.academicLevel,
                    engagement_score: calculateEngagementScore(sessionMetrics, events)
                  });
                }, seconds * 1000);
              });

              // Universal session analytics
              window.addEventListener('beforeunload', function() {
                const context = detectUniversalContext();
                const sessionDuration = Date.now() - sessionMetrics.startTime;
                sessionMetrics.activeTime = Date.now() - sessionMetrics.lastActivity;
                
                gtag('event', 'universal_session_summary', {
                  event_category: 'analytics',
                  event_label: 'session_complete',
                  session_duration: sessionDuration,
                  active_engagement: sessionMetrics.activeTime,
                  pages_visited: sessionMetrics.pagesVisited.size,
                  courses_accessed: Array.from(sessionMetrics.coursesAccessed),
                  max_scroll_depth: sessionMetrics.maxScrollDepth,
                  total_interactions: Object.values(events).reduce((a, b) => a + b, 0),
                  engagement_score: calculateEngagementScore(sessionMetrics, events),
                  learning_pattern: detectLearningPattern(sessionMetrics),
                  user_journey_stage: assessJourneyStage(sessionMetrics)
                });
              });

              // SPA navigation support
              let currentURL = location.href;
              const observeNavigation = function() {
                if (location.href !== currentURL) {
                  currentURL = location.href;
                  sessionMetrics.pagesVisited.add(location.pathname);
                  
                  setTimeout(() => {
                    const newContext = detectUniversalContext();
                    gtag('event', 'universal_page_view', {
                      content_category: newContext.resourceType,
                      academic_level: newContext.academicLevel,
                      resource_type: newContext.resourceType,
                      content_freshness: newContext.freshness,
                      is_featured_content: newContext.isHot || newContext.isNew,
                      course_context: newContext.courseCode,
                      page_title: newContext.title.substring(0, 150),
                      word_count: document.body.textContent?.length || 0
                    });
                  }, 50);
                }
              };
              
              // Multiple observation methods for maximum compatibility
              setInterval(observeNavigation, 500);
              new MutationObserver(observeNavigation).observe(document.body, {
                childList: true, subtree: true, attributes: true
              });
            }

            // ===== UNIVERSAL HELPER FUNCTIONS =====
            function classifyLink(link) {
              const href = link.href.toLowerCase();
              const text = link.textContent.toLowerCase();
              
              if (href.includes('/java') || text.includes('java')) return 'java_subject';
              if (href.includes('/linux') || text.includes('linux')) return 'linux_subject';
              if (href.includes('/dsa') || text.includes('dsa')) return 'dsa_subject';
              if (href.includes('/database') || text.includes('database')) return 'database_subject';
              if (href.includes('/os') || text.includes('operating system')) return 'os_subject';
              if (href.includes('/cpp') || text.includes('c++')) return 'cpp_subject';
              if (href.includes('/c.architecture') || text.includes('architecture')) return 'architecture_subject';
              if (href.includes('/cn.protocols') || text.includes('protocols')) return 'protocols_subject';
              if (href.includes('/ip1') || text.includes('internet programming')) return 'ip1_subject';
              if (href.includes('/c.networking') || text.includes('networking')) return 'networking_subject';
              
              if (text.includes('study guide') || text.includes('conquer') || text.includes('pass like')) return 'study_guide';
              if (text.includes('ue') || text.includes('exam')) return 'exam_paper';
              if (text.includes('solved')) return 'solved_paper';
              if (text.includes('test')) return 'test_paper';
              if (text.includes('hot') || text.includes('🔥')) return 'trending_content';
              if (text.includes('new') || text.includes('✨')) return 'new_content';
              
              return 'general_navigation';
            }

            function isInteractiveElement(element) {
              return element.closest('a, button, [class*="tip"], [class*="answer"], [class*="reveal"], pre, code, [onclick], [role="button"]') !== null;
            }

            function classifyInteraction(element) {
              if (element.closest('[class*="tip"], [class*="answer"], [class*="reveal"]')) return 'content_reveal';
              if (element.closest('pre, code')) return 'code_interaction';
              if (element.closest('button')) return 'button_click';
              if (element.closest('a')) return 'link_click';
              return 'general_interaction';
            }

            function extractContextFromURL(url) {
              const tempLink = document.createElement('a');
              tempLink.href = url;
              return detectUniversalContext(tempLink.pathname);
            }

            function calculateEngagementScore(metrics, events) {
              const timeScore = Math.min(metrics.activeTime / 60000, 1) * 30;
              const scrollScore = (metrics.maxScrollDepth / 100) * 25;
              const pageScore = Math.min(metrics.pagesVisited.size / 10, 1) * 20;
              const interactionScore = Math.min(Object.values(events).reduce((a, b) => a + b, 0) / 20, 1) * 25;
              return Math.round(timeScore + scrollScore + pageScore + interactionScore);
            }

            function detectLearningPattern(metrics) {
              if (metrics.coursesAccessed.size >= 3) return 'multi_subject_explorer';
              if (metrics.pagesVisited.size >= 5) return 'deep_diver';
              if (metrics.maxScrollDepth >= 80) return 'thorough_reader';
              return 'casual_browser';
            }

            function assessJourneyStage(metrics) {
              const sessionCount = parseInt(localStorage.getItem('total_sessions') || '0') + 1;
              localStorage.setItem('total_sessions', sessionCount.toString());
              
              if (sessionCount === 1) return 'first_visit';
              if (sessionCount <= 3) return 'new_user';
              if (sessionCount <= 10) return 'active_user';
              return 'power_user';
            }

            // ===== UNIVERSAL INITIALIZATION =====
            function initUniversalAnalytics() {
              console.log('🚀 Universal Analytics Initialized - Future Proof Tracking Active');
              
              // Initial page view
              const context = detectUniversalContext();
              gtag('event', 'universal_page_view', {
                content_category: context.resourceType,
                academic_level: context.academicLevel,
                resource_type: context.resourceType,
                content_freshness: context.freshness,
                is_featured_content: context.isHot || context.isNew,
                course_context: context.courseCode,
                page_title: context.title.substring(0, 150),
                word_count: document.body.textContent?.length || 0
              });
              
              // Start universal tracking
              initUniversalEventCapture();
              
              // Track community engagement
              gtag('event', 'universal_community_visit', {
                event_category: 'community',
                event_label: 'educational_resource_platform'
              });
            }

            // Auto-initialize with fallbacks
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initUniversalAnalytics);
            } else {
              initUniversalAnalytics();
            }

            // Fallback initialization for dynamic content
            setTimeout(initUniversalAnalytics, 1000);
            setInterval(() => {
              if (!window.analyticsInitialized) {
                initUniversalAnalytics();
                window.analyticsInitialized = true;
              }
            }, 5000);

            console.log('✅ Universal Super Analytics Loaded - Future Proof Tracking Active');
            window.analyticsInitialized = true;
          `,
        }}
      />
    </>
  )
}

export default (() => Analytics) satisfies QuartzComponentConstructor