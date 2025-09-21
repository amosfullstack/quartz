
___


1. Install Intellij Community Edition
```bash
$ sudo snap install intellij-idea-community --classic
```

2. Install the latest OpenJDK JDK:
- The `default-jdk` package will install the latest OpenJDK version available in Ubuntu's repositories.
```bash
sudo apt install default-jdk
```

3.  Verify the installation:
    - Checkout if java is installed correctly
    ```bash
    java -version
    
    javac -version
    ```

3. Summary of Commands
```bash
# 1. Update system
sudo apt update

# 2. Install JDK (Choose one)
sudo apt install default-jdk           # Latest stable
sudo apt install openjdk-17-jdk        # Specific LTS version
sudo apt install openjdk-21-jdk        # Another specific version

# 3. Switch versions if multiple are installed
sudo update-alternatives --config java
sudo update-alternatives --config javac

# 4. Verify
java -version
javac -version

```