// Dữ liệu dự án từ CV của bạn 
const projects = [
    {
        title: "Real-time Chat Ecosystem",
        description: "Hệ thống nhắn tin tức thời hỗ trợ truyền tải hình ảnh, trạng thái online/offline và quản lý tin nhắn chưa đọc thông qua Socket.IO.",
        technologies: "React, Socket.io, Tailwind CSS, Express, MongoDB",
        link: "https://shorturl.at/F5jWC",
    },
    {
        title: "Salinity Intrusion Monitoring",
        description: "Ứng dụng PERN-stack theo dõi và dự báo chỉ số mặn, sử dụng RESTful APIs bảo mật và xác thực JWT.",
        technologies: "PostgreSQL (Neon), Express, React, Node.js",
        link: "https://furl.one/9ydoUrv"
    },
    {
        title: "Volunteer Web Platform",
        description: "Kiến trúc MVP sử dụng React 19 và FastAPI, tích hợp CI/CD pipeline với GitHub Actions và Docker.",
        technologies: "React 19, FastAPI, Docker, AWS",
        link: "https://tinyurl.com/25f5vje6"
    },
    {
        title: "HCMUT Tutor Support System",
        description: "Giao diện mở rộng (Scalable Frontend) với Tailwind CSS và TanStack; đảm bảo chất lượng code bằng Husky.",
        technologies: "React, Tailwind CSS, TanStack, Husky",
        link: "https://tinyurl.com/yc8yfbw6"
    }
];

// Hàm render dự án vào DOM
function renderProjects() {
    const container = document.getElementById('project-grid');

    // Kiểm tra nếu container tồn tại
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <p class="tech-stack">${project.technologies}</p>
                <div class="project-links">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="link-github">Xem Source Code</a>
                </div>
            </div>
        </div>
    `).join('');
}


const experienceData = [
    {
        date: "2025-nay",
        title: "Kỹ sư phần mềm thực tập",
        institution: "Dự án mã nguồn mở",
        description: "Phát triển ứng dụng web theo mô hình MVP sử dụng React 19 và FastAPI."

    },
    {
        date: "2025",
        title: "Full-stack Developer (Dự án mã nguồn mở)",
        institution: "Salinity Intrusion Web & Volunteer Web",
        description: "Phát triển ứng dụng PERN-stack và FastAPI để theo dõi chỉ số xâm nhập mặn và quản lý tình nguyện viên. Thiết lập CI/CD pipeline với Docker, GitHub Actions và triển khai trên AWS."
    },
    {
        date: "2025",
        title: "Frontend Developer",
        institution: "Hệ thống hỗ trợ gia sư HCMUT",
        description: "Xây dựng giao diện mở rộng sử dụng React, Tailwind CSS và TanStack libraries. Áp dụng Husky để kiểm soát chất lượng mã nguồn và quy trình Git hooks."
    }
];

function renderExperience() {
    const timelineContainer = document.getElementById('timeline-container');

    // Kiểm tra nếu container tồn tại để tránh lỗi JS
    if (!timelineContainer) return;

    // Xóa nội dung cũ trước khi render (nếu có)
    timelineContainer.innerHTML = '';

    experienceData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3 style="color: #2563eb; margin-bottom: 5px;">${item.title}</h3>
                <h4 style="color: #1e293b; margin-bottom: 10px;">${item.institution}</h4>
                <p style="color: #64748b; line-height: 1.6;">${item.description}</p>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
}

// Gọi hàm sau khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', renderExperience);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperience();
});