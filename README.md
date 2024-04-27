React native installation:

1: Install node: https://nodejs.org/en/download => click on macrOS installer     /usr/local/bin is in your $PATH.
2: Install npm : watchman --version
3: Install Android Studio
4: Install Xcode
5:  Install Brew: https://brew.sh/
     1)Command:  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     - Run these two commands in your terminal to add Homebrew to your PATH:
          (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/shashikantyadav/.zprofile
          eval "$(/opt/homebrew/bin/brew shellenv)"
	2) brew install node
     	3) brew install watchman
6: Create Folder in your choice location => “ABC”  => Right Click and Open in terminal

7: Create project: npx react-native@latest init AwesomeProject 

8: Open Project: cd  AwesomeProject 
9:  Run Android: npx react-native run-android
10: Run iOS: npx react-native run-ios

https://reactnative.dev/docs/environment-setup
https://www.knowledgehut.com/blog/web-development/install-react-native-mac

Open folder in visual studio code using terminal: CMD + SHIFT + P shell command Install code command in path =>navigate to any project from the terminal and type code .
