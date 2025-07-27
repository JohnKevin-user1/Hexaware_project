```mermaid
graph TD
    %% Define Styles
    classDef page fill:#E3F2FD,stroke:#3498DB,stroke-width:2px;
    classDef action fill:#C8E6C9,stroke:#2ECC71,stroke-width:1px,color:#000;
    classDef decision fill:#FFF9C4,stroke:#F1C40F,stroke-width:2px;
    classDef user fill:#FFCDD2,stroke:#E57373,stroke-width:2px;

    %% Start
    U(User Visits EGURU) --> LP;

    %% Subgraph for Onboarding
    subgraph Onboarding & Authentication
        LP[🏠 Landing Page]:::page;
        SU[📝 Sign Up Page]:::page;
        LI[🔑 Login Page]:::page;
        FP[❓ Forgot Password Page]:::page;

        LP -- "Clicks 'Sign Up'" --> SU;
        LP -- "Clicks 'Login'" --> LI;
        LI -- "Forgot Password?" --> FP;
        SU -- "Creates Account" --> DASH;
        LI -- "Successful Login" --> DASH;
        FP -- "Resets Password & Logs in" --> DASH;
    end

    %% Subgraph for Core App Experience
    subgraph Core Application
        DASH[🖥️ Dashboard]:::page;
        CP[📚 Courses Page]:::page;
        CDP[📄 Course Detail Page]:::page;
        CO[💳 Checkout Page]:::page;
        PLAYER[▶️ Course Player]:::page;
        PROFILE[👤 User Profile]:::page;
        SETTINGS[⚙️ Settings]:::page;

        DASH -- "Views All Courses" --> CP;
        DASH -- "Views Enrolled Course" --> PLAYER;
        DASH -- "Clicks Profile Icon" --> PROFILE;
        CP -- "Selects a Course" --> CDP;
        CDP -- "Enrolls in Course" --> CO;
        CO -- "Payment Successful" --> PLAYER;
        PLAYER -- "Accesses Profile" --> PROFILE;
        PROFILE -- "Edits Settings" --> SETTINGS;
    end

    %% Subgraph for Community Features
    subgraph Community & Engagement
        BLOG[📰 Blog Page]:::page;
        POST[📖 Blog Post Page]:::page;
        

        DASH -- "Navigates to Blog" --> BLOG;
        BLOG -- "Reads an Article" --> POST;
        
    end

    %% Class Assignments
    class U user;
