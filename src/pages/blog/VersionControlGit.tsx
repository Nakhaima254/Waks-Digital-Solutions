import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/blog-version-control.jpg";
import branchingImage from "@/assets/blog-git-branching.jpg";
import collaborationImage from "@/assets/blog-git-collaboration.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const VersionControlGit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 5, 2025</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Mastering Git: Version Control for Modern Development</h1>
            <p className="text-xl text-primary-foreground/80">Learn essential Git workflows and best practices for effective version control, team collaboration, and maintaining clean project history.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={heroImage} alt="Git version control workflow" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
              <h2>Why Version Control Matters</h2>
              <p>
                Version control is fundamental to modern software development. Git enables teams to collaborate effectively, track changes, and maintain project history while preventing code conflicts and data loss.
              </p>

              <h2>Git Branching Strategies</h2>
              <img 
                src={branchingImage} 
                alt="Git branching workflow" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Effective branching strategies are crucial for team collaboration. Popular approaches include Git Flow, GitHub Flow, and trunk-based development.
              </p>
              <ul>
                <li>Create feature branches for new work</li>
                <li>Keep main branch deployable at all times</li>
                <li>Use descriptive branch names</li>
                <li>Delete branches after merging</li>
              </ul>

              <h2>Collaboration Best Practices</h2>
              <img 
                src={collaborationImage} 
                alt="GitHub pull request workflow" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Pull requests (or merge requests) are central to team collaboration. They enable code review, discussion, and quality control before changes are merged into the main codebase.
              </p>
              <ul>
                <li>Write clear, descriptive commit messages</li>
                <li>Keep commits focused and atomic</li>
                <li>Request reviews from appropriate team members</li>
                <li>Address feedback promptly and professionally</li>
              </ul>

              <h2>Commit Message Guidelines</h2>
              <p>
                Good commit messages make project history meaningful and searchable. Follow conventions like Conventional Commits to maintain consistency across your team.
              </p>

              <h2>Resolving Merge Conflicts</h2>
              <p>
                Merge conflicts are inevitable in collaborative development. Learn to resolve them efficiently by understanding the conflict markers, communicating with your team, and testing thoroughly after resolution.
              </p>

              <h2>Git Workflows for Teams</h2>
              <p>
                Establish clear workflows for your team. Define processes for feature development, bug fixes, hotfixes, and releases. Automate where possible with CI/CD pipelines.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li>✓ Use meaningful branching strategies</li>
                  <li>✓ Write clear, descriptive commits</li>
                  <li>✓ Leverage pull requests for code review</li>
                  <li>✓ Handle merge conflicts carefully</li>
                  <li>✓ Establish team workflows and conventions</li>
                </ul>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Development" />
        </div>
      </div>
    </div>
  );
};

export default VersionControlGit;
