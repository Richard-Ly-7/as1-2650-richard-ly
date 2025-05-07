import gitConfigList from './img/git-config-list.png'
import './App.css'

function App() {

  return (
    <>
      <h1>Lab 1: Git + Vite Setup</h1>
      <h2>Task 2: Git Config</h2>
      <ul>
        <li>Running git config --global user.name/email sets the name/email of the user working on the project globally, allowing them to identify themselves when they're committing to the project.</li>
        <li>Without the --global, the values are stored in the current repo's .git/config, but if --global is included, these values are stored in the ~/.gitconfig file.</li>
        <li>git config --list result:</li>
        <img src={gitConfigList} alt="git config --list result"/>
        <li>You can tell if Git is already initialized by running git status in the terminal.</li>
      </ul>
      <h2>Task 3: Commit Messages & Log</h2>
      <ul>
        <li>Commit messages should be written in present tense, since it tells users what applying that commit will do.</li>
        <li>Output of git log --oneline:</li>
        <li>e16f30a (HEAD -&gt; main) Initial commit: set up Vite React app</li>
      </ul>
      <h2>Task 4: git diff</h2>
      <ul>
        <li>git diff shows the user what has been changed in the files but not yet staged.</li>
        <li>The + symbol indicates what lines of codes were added, and the - symbol indicates what lines of code were deleted since the last commit.</li>
      </ul>
      <h2>Task 5: git restore</h2>
        <ul>
          <li>Git restore reverts any changes in the file that were made since the last commit.</li>
        </ul>
      <h2>Task 6: git push -u</h2>
      <ul>
        <li>The -u flag sets up tracking so that pushes/pulls in the future can be done with git push or git pull, not needing to add 'origin main' to the command.</li>
        <li><a href="https://github.com/Richard-Ly-7/as1-2650-richard-ly">https://github.com/Richard-Ly-7/as1-2650-richard-ly</a></li>
      </ul>
      <h2>Task 7: Screenshot of git log</h2>
      <ul>
        <li>Stage changes again</li>
      </ul>
      <h2>Task 8: .gitignore</h2>
      <ul>
        <li>The .gitignore file tells Git which files to skip during tracking.</li>
        <li>The node_modules folder and the dist folder are ignored in this project.</li>
      </ul>
    </>
  )
}

export default App
