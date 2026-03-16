


# ANDROID PROGRAMMING EXAMINATION
## CP 313 2022-2023

---

## SECTION A: (40 MARKS)

### Question One

Choose the most correct answer and write its letter in the answer booklet provided.
*(1 Mark Each)*

**i. All layout classes are the subclasses of: -**

A. Android.widget

B. Android.view.View

C. Android.view.ViewGroup

D. Android.view.Widget

> [!Tip]- Answer (Click to show)
> **C. Android.view.ViewGroup**
>
> **Explanation:** ViewGroup is the base class for layouts and containers in Android. It extends View and provides the structure for holding other Views. All layout classes (LinearLayout, RelativeLayout, ConstraintLayout, etc.) are subclasses of ViewGroup.

---

**ii. What is manifest XML in android?**

A. A file that contains all information about the layout of the android application.

B. A file that contains all the information about the android application.

C. A file that contains all the information about the activities of the android application.

D. A file that contains all resources of the android application.

> [!Tip]- Answer (Click to show)
> **B. A file that contains all the information about the android application.**
>
> **Explanation:** AndroidManifest.xml is the essential configuration file that declares application components (activities, services, broadcast receivers, content providers), required permissions, hardware/software features, API level requirements, and other metadata about the application.

---

**iii. What is the use of a content provider in Android?**

A. For sharing data between one activity and another activity.

B. For storing data in a SQLite database.

C. For sending data from one application to another application.

D. For storing data in a shared preferences.

> [!Tip]- Answer (Click to show)
> **C. For sending data from one application to another application.**
>
> **Explanation:** Content providers manage access to a structured set of data. They encapsulate data and provide mechanisms for defining data security. Content providers are primarily used to share data between different applications in a safe and controlled manner.

---

**iv. While developing android application developers can test their apps on: -**

A. Emulators in android SDK.

B. Android phone.

C. Third-party emulator.

D. All of the above.

> [!Tip]- Answer (Click to show)
> **D. All of the above.**
>
> **Explanation:** Android developers can test applications on multiple platforms including: Android SDK emulators (AVD - Android Virtual Devices), physical Android phones/devices connected via USB, and third-party emulators like Genymotion or BlueStacks.

---

**v. The services in android can be stopped using which of the following method?**

A. system.exit() and stopService().

B. stopSelf() and stopService().

C. finish() and end().

D. serviceStop() and endService().

> [!Tip]- Answer (Click to show)
> **B. stopSelf() and stopService().**
>
> **Explanation:** Services can be stopped in two ways: stopSelf() is called by the service itself to terminate its own execution, while stopService() is called by external components (like activities) to request the service to stop.

---

**vi. Identify among the following which is not a state in the service lifecycle.**

A. Running.

B. Start.

C. Paused.

D. Destroyed.

> [!Tip]- Answer (Click to show)
> **C. Paused.**
>
> **Explanation:** The service lifecycle includes onCreate(), onStartCommand(), onBind(), and onDestroy() methods. Unlike activities, services do not have a "paused" state. Services are either running (started) or destroyed. The paused state is part of the activity lifecycle, not service lifecycle.

---

**vii. Identify the dialogue class in Android among the following.**

A. DatePicker.

B. AlertDialog.

C. ProgressDialog.

D. All of the above.

> [!Tip]- Answer (Click to show)
> **D. All of the above.**
>
> **Explanation:** Android provides several dialog classes including: AlertDialog (for showing alerts with buttons), DatePickerDialog (for date selection), ProgressDialog (for showing progress indicators), TimePickerDialog, and custom dialogs. All are subclasses of Dialog.

---

**viii. What is the life cycle of broadcast receivers in android?**

A. send intentO.

B. onReceive.

C. implicitBroadcastO.

D. sendBroadcastO, sendOrderBroadcastO, and sendStickyBroadcastO.

> [!Tip]- Answer (Click to show)
> **B. onReceive.**
>
> **Explanation:** Broadcast receivers have a single callback method: onReceive(). When a broadcast arrives, the system calls onReceive() and the BroadcastReceiver object is valid only during the execution of this method. Once onReceive() returns, the receiver is no longer active.

---

**ix. What runs in the background and doesn't have any UI components?**

A. Intents.

B. Content Providers.

C. Services.

D. Applications.

> [!Tip]- Answer (Click to show)
> **C. Services.**
>
> **Explanation:** Services are application components that perform long-running operations in the background without providing a user interface. They can run even when the user is not interacting with the application.

---

**x. Which one is not a nickname of a version of Android?**

A. Cupcake.

B. Gingerbread.

C. Honeycomb.

D. Android.

> [!Tip]- Answer (Click to show)
> **D. Android.**
>
> **Explanation:** Android versions are named after desserts in alphabetical order: Cupcake (1.5), Donut (1.6), Eclair (2.0-2.1), Froyo (2.2), Gingerbread (2.3), Honeycomb (3.0-3.2), Ice Cream Sandwich (4.0), Jelly Bean (4.1-4.3), KitKat (4.4), Lollipop (5.0-5.1), Marshmallow (6.0), Nougat (7.0-7.1), Oreo (8.0-8.1), Pie (9.0), Android 10, etc. "Android" is the platform name, not a specific version nickname.

---

### Question Two

Write true if the statement is correct and false if the statement is incorrect.

*(10 Marks - 1 Mark Each)*

**(a) Mobile Apps On Both Android And IOS Platforms Should Not Perform Long Lasting Tasks, Such As Network.**

> [!Tip]- Answer (Click to show)
> **TRUE**
>
> **Explanation:** Mobile apps should not perform long-lasting tasks like network operations on the main/UI thread as it can block the user interface and cause ANR (Application Not Responding) errors. Such operations should be performed on background threads using AsyncTask, Threads, WorkManager, or background services.

---

**(b) Android is built upon the Java Micro Edition (J2ME) version of java.**

> [!Tip]- Answer (Click to show)
> **FALSE**
>
> **Explanation:** Android is not built upon J2ME. Android uses its own Dalvik Virtual Machine (later replaced by Android Runtime - ART) which runs Dalvik bytecode converted from Java bytecode. Android's core libraries are based on Apache Harmony and are different from J2ME.

---

**(c) Native libraries is one of the core component of the .apk in android.**

> [!Tip]- Answer (Click to show)
> **TRUE**
>
> **Explanation:** Native libraries are indeed one of the core components of an APK (Android Package Kit). They are typically located in the /lib folder of the APK and contain platform-specific compiled code written in C/C++ used by the application.

---

**(d) The code which is compiled to run the android application is always contained within the xml layout file.**

> [!Tip]- Answer (Click to show)
> **FALSE**
>
> **Explanation:** The compiled code (bytecode) is contained in DEX (Dalvik Executable) files, not in XML layout files. XML layout files define the user interface structure and are compiled into binary XML format, but the actual application logic is compiled into .dex files.

---

**(e) The xml file that contains all the texts that your application uses is called text.xml.**

> [!Tip]- Answer (Click to show)
> **FALSE**
>
> **Explanation:** The XML file that contains all text strings used in the application is called **strings.xml**, not text.xml. It is located in the res/values/ folder and contains string resources that can be localized and referenced throughout the app.

---

**(f) There is no guarantee that an activity will be stopped prior to being destroyed.**

> [!Tip]- Answer (Click to show)
> **TRUE**
>
> **Explanation:** Under memory pressure, the system may kill an application process directly without calling the activity's onStop() method. This can happen when the system needs to reclaim memory quickly. Therefore, it's important to save critical data in onPause() rather than relying solely on onStop().

---

**(g) In an explicit intent, the sender specifies the type of receiver.**

> [!Tip]- Answer (Click to show)
> **FALSE**
>
> **Explanation:** In an explicit intent, the sender specifies the exact component (class name) to be launched, not just the type. For example: new Intent(this, TargetActivity.class). The type of receiver is specified in implicit intents using actions, categories, and data.

---

**(h) There can be only one running activity in a given time.**

> [!Tip]- Answer (Click to show)
> **TRUE**
>
> **Explanation:** In Android, only one activity can be in the foreground (running/resumed state) at any given time. Multiple activities can be in paused or stopped states in the back stack, but only one activity is actively interacting with the user.

---

**(i) Java is the only programming language used to make an android application.**

> [!Tip]- Answer (Click to show)
> **FALSE**
>
> **Explanation:** Android applications can be developed using multiple programming languages including: Java, Kotlin (officially supported and recommended), C/C++ (via NDK for native code), and other JVM languages. Kotlin is now Google's preferred language for Android development.

---

**(j) The only database that android application can work with is SQLite.**

> [!Tip]- Answer (Click to show)
> **FALSE**
>
> **Explanation:** While SQLite is the built-in database engine in Android, applications can work with various other databases including: Room Persistence Library (abstraction over SQLite), Realm, Firebase Realtime Database, Cloud Firestore, MySQL, PostgreSQL (via network connections), and other NoSQL databases.

---

### Question Three

**(a) Assume you have a running application that is already running an Activity called Activity1. Activity1 starts another Activity called Activity2. Name one Activity lifecycle method that will be called on Activity1 after this point, but before Activity2 starts.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **onPause()**
>
> **Explanation:** When Activity1 starts Activity2, the following sequence occurs:
> 1. Activity1's onPause() method is called first
> 2. Activity2's onCreate(), onStart(), and onResume() methods are called
> 3. Activity1's onStop() is called only after Activity2 becomes visible
>
> Therefore, onPause() is the lifecycle method called on Activity1 before Activity2 starts.

---

**(b) Suppose you have an application that is running an Activity called Activity1. Suppose that Activity1 executes and starts other Activities, but that the user never quits or backs out of the Activity. How many times can Activity1's onCreate() method get called?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Multiple times**
>
> **Explanation:** Activity1's onCreate() can be called multiple times even if the user never explicitly quits or backs out. This happens because:
>
> 1. **Configuration changes**: When the device rotates, changes language, or keyboard availability changes, the activity is destroyed and recreated by default
> 2. **Memory pressure**: The system may kill the activity when it's in the background to reclaim memory, then recreate it when the user returns
> 3. **"Don't Keep Activities"**: If this developer option is enabled, activities are destroyed as soon as they're stopped
>
> Each recreation calls onCreate() again.

---

**(c) Suppose that there are two activities in an application named ActivityOne and ActivityTwo. You want to invoke ActivityTwo from ActivityOne. What code you will write?**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Code to invoke ActivityTwo from ActivityOne:**
>
> ```java
> // Method 1: Simple intent with explicit class
> Intent intent = new Intent(ActivityOne.this, ActivityTwo.class);
> startActivity(intent);
>
> // Method 2: With action (if declared in manifest)
> Intent intent = new Intent("com.example.ACTION_VIEW_ACTIVITY_TWO");
> startActivity(intent);
>
> // Method 3: Using context and class
> Intent intent = new Intent(getApplicationContext(), ActivityTwo.class);
> startActivity(intent);
> ```
>
> The intent must be declared in AndroidManifest.xml for ActivityTwo:
> ```xml
> <activity android:name=".ActivityTwo" />
> ```

---

**(d) How will you reference a textbox control in java file, that is available in XML file and the ID is txtName.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Referencing a TextView/EditText with ID txtName in Java:**
>
> ```java
> // In your Activity class
> public class MainActivity extends AppCompatActivity {
>     
>     // Declare the TextView variable
>     private TextView txtName; // or EditText if it's an input field
>     
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main); // Set the layout first
>         
>         // Reference the textbox using findViewById
>         txtName = findViewById(R.id.txtName);
>         
>         // Now you can use the textbox
>         txtName.setText("Hello World"); // Set text
>         String text = txtName.getText().toString(); // Get text
>         txtName.setVisibility(View.VISIBLE); // Set visibility
>     }
> }
> ```
>
> **XML layout definition:**
> ```xml
> <TextView
>     android:id="@+id/txtName"
>     android:layout_width="wrap_content"
>     android:layout_height="wrap_content" />
> ```

---

**(e) Suppose that there are two activities in an application named FirstActivity and SecondActivity. You want to send website name from ActivityOne to ActivityTwo. What code you will write? Suppose that website name is www.udom.ac.tz.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Sending website name from FirstActivity to SecondActivity:**
>
> **In FirstActivity.java:**
> ```java
> public class FirstActivity extends AppCompatActivity {
>     
>     private String websiteName = "www.udom.ac.tz";
>     
>     // Method to start SecondActivity with data
>     private void openSecondActivity() {
>         // Create Intent
>         Intent intent = new Intent(FirstActivity.this, SecondActivity.class);
>         
>         // Method 1: Using putExtra
>         intent.putExtra("website_key", websiteName);
>         
>         // Method 2: Using Bundle
>         Bundle bundle = new Bundle();
>         bundle.putString("website_key", websiteName);
>         intent.putExtras(bundle);
>         
>         // Method 3: Multiple extras
>         intent.putExtra("website_name", websiteName)
>               .putExtra("timestamp", System.currentTimeMillis());
>         
>         // Start the activity
>         startActivity(intent);
>     }
>     
>     // Example button click handler
>     public void onButtonClick(View view) {
>         openSecondActivity();
>     }
> }
> ```

---

**(f) How will you get the data in secondActivity? Refer to part (e).**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Receiving website name in SecondActivity:**
>
> **In SecondActivity.java:**
> ```java
> public class SecondActivity extends AppCompatActivity {
>     
>     private TextView displayTextView;
>     
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_second);
>         
>         displayTextView = findViewById(R.id.displayText);
>         
>         // Get the intent that started this activity
>         Intent receivedIntent = getIntent();
>         
>         // Method 1: Get data using getStringExtra()
>         String websiteName = receivedIntent.getStringExtra("website_key");
>         
>         // Method 2: Get from Bundle
>         Bundle bundle = receivedIntent.getExtras();
>         if (bundle != null) {
>             websiteName = bundle.getString("website_key");
>         }
>         
>         // Method 3: With default value if key doesn't exist
>         websiteName = receivedIntent.getStringExtra("website_key");
>         if (websiteName == null) {
>             websiteName = "No website provided";
>         }
>         
>         // Display the received data
>         if (websiteName != null) {
>             displayTextView.setText("Website: " + websiteName);
>         }
>         
>         // Check if intent has specific extra
>         if (receivedIntent.hasExtra("website_key")) {
>             String name = receivedIntent.getStringExtra("website_key");
>             Toast.makeText(this, "Received: " + name, Toast.LENGTH_SHORT).show();
>         }
>     }
> }
> ```

---

## SECTION B: (60 MARKS)

**Attempt any THREE (3) out of FOUR (4) questions in this section.**

---

### Question Four

Many students now days fail to manage loan that they get from Higher Education Students Loan Board (HESLB). Most of them finish the money even before the period they are supposed to use. Based on the mentioned problem, HESLB wants a mobile application called Budget Planner that will helps their beneficiaries to manage their money. As a mobile apps developer, you have been consulted with HESLB to develop the Budget Planner mobile app that will do the following: receive the amount from the student (initial balance), the student will enter the number of days that he/she supposed to use the money. Every time the student spends a certain amount of money the app should deduct from the initial balance. Once the student is about to finishes the money, the app should alert him/her. The app should not allow the student to spend more than his/her initial balance.

*(20 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Budget Planner Application Implementation:**
>
> ## 1. activity_main.xml - Layout File
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp"
>     android:background="#F5F5F5">
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="BUDGET PLANNER"
>         android:textSize="24sp"
>         android:textStyle="bold"
>         android:textColor="#2196F3"
>         android:gravity="center"
>         android:layout_marginBottom="30dp"/>
>
>     <!-- Initial Setup Section -->
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="INITIAL SETUP"
>         android:textSize="18sp"
>         android:textStyle="bold"
>         android:textColor="#333333"
>         android:layout_marginTop="10dp"/>
>
>     <EditText
>         android:id="@+id/etInitialBalance"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Enter initial balance (TZS)"
>         android:inputType="numberDecimal"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginTop="8dp"/>
>
>     <EditText
>         android:id="@+id/etTotalDays"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Enter number of days"
>         android:inputType="number"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginTop="8dp"/>
>
>     <Button
>         android:id="@+id/btnSetup"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Start Budget Planning"
>         android:backgroundTint="#4CAF50"
>         android:layout_marginTop="10dp"
>         android:layout_marginBottom="20dp"/>
>
>     <View
>         android:layout_width="match_parent"
>         android:layout_height="1dp"
>         android:background="#CCCCCC"
>         android:layout_marginVertical="15dp"/>
>
>     <!-- Budget Information Section -->
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal"
>         android:background="#FFFFFF"
>         android:padding="15dp"
>         android:elevation="2dp">
>
>         <LinearLayout
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:orientation="vertical">
>             
>             <TextView
>                 android:layout_width="wrap_content"
>                 android:layout_height="wrap_content"
>                 android:text="Initial Balance:"
>                 android:textColor="#666666"/>
>                 
>             <TextView
>                 android:id="@+id/tvInitialBalance"
>                 android:layout_width="wrap_content"
>                 android:layout_height="wrap_content"
>                 android:text="0.00 TZS"
>                 android:textSize="16sp"
>                 android:textStyle="bold"
>                 android:textColor="#2196F3"/>
>         </LinearLayout>
>
>         <LinearLayout
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:orientation="vertical">
>             
>             <TextView
>                 android:layout_width="wrap_content"
>                 android:layout_height="wrap_content"
>                 android:text="Remaining:"
>                 android:textColor="#666666"/>
>                 
>             <TextView
>                 android:id="@+id/tvRemainingBalance"
>                 android:layout_width="wrap_content"
>                 android:layout_height="wrap_content"
>                 android:text="0.00 TZS"
>                 android:textSize="16sp"
>                 android:textStyle="bold"
>                 android:textColor="#4CAF50"/>
>         </LinearLayout>
>
>         <LinearLayout
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:orientation="vertical">
>             
>             <TextView
>                 android:layout_width="wrap_content"
>                 android:layout_height="wrap_content"
>                 android:text="Days Left:"
>                 android:textColor="#666666"/>
>                 
>             <TextView
>                 android:id="@+id/tvDaysLeft"
>                 android:layout_width="wrap_content"
>                 android:layout_height="wrap_content"
>                 android:text="0"
>                 android:textSize="16sp"
>                 android:textStyle="bold"
>                 android:textColor="#FF9800"/>
>         </LinearLayout>
>     </LinearLayout>
>
>     <!-- Daily Budget Info -->
>     <TextView
>         android:id="@+id/tvDailyBudget"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Daily Budget: 0.00 TZS"
>         android:textSize="16sp"
>         android:textStyle="bold"
>         android:gravity="center"
>         android:padding="10dp"
>         android:layout_marginVertical="10dp"/>
>
>     <!-- Spending Section -->
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="RECORD SPENDING"
>         android:textSize="18sp"
>         android:textStyle="bold"
>         android:textColor="#333333"
>         android:layout_marginTop="10dp"/>
>
>     <EditText
>         android:id="@+id/etExpenseAmount"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Enter expense amount (TZS)"
>         android:inputType="numberDecimal"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginTop="8dp"/>
>
>     <EditText
>         android:id="@+id/etExpenseDescription"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Expense description"
>         android:inputType="text"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginTop="8dp"/>
>
>     <Button
>         android:id="@+id/btnSpend"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Record Expense"
>         android:backgroundTint="#FF5722"
>         android:layout_marginTop="10dp"
>         android:enabled="false"/>
>
>     <!-- Warning Message -->
>     <TextView
>         android:id="@+id/tvWarning"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text=""
>         android:textSize="16sp"
>         android:textColor="#F44336"
>         android:gravity="center"
>         android:padding="10dp"
>         android:layout_marginTop="10dp"/>
>
>     <!-- Progress Bar -->
>     <ProgressBar
>         android:id="@+id/progressBar"
>         style="?android:attr/progressBarStyleHorizontal"
>         android:layout_width="match_parent"
>         android:layout_height="20dp"
>         android:layout_marginTop="15dp"
>         android:max="100"
>         android:progress="0"/>
>
>     <!-- Reset Button -->
>     <Button
>         android:id="@+id/btnReset"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Reset Budget"
>         android:backgroundTint="#9E9E9E"
>         android:layout_marginTop="15dp"/>
>
> </LinearLayout>
> ```
>
> ## 2. BudgetPlanner.java - Main Activity
> ```java
> import android.content.Context;
> import android.content.DialogInterface;
> import android.content.SharedPreferences;
> import android.os.Bundle;
> import android.view.View;
> import android.widget.Button;
> import android.widget.EditText;
> import android.widget.ProgressBar;
> import android.widget.TextView;
> import android.widget.Toast;
> import androidx.appcompat.app.AlertDialog;
> import androidx.appcompat.app.AppCompatActivity;
>
> public class BudgetPlanner extends AppCompatActivity {
>
>     // UI Components
>     private EditText etInitialBalance, etTotalDays, etExpenseAmount, etExpenseDescription;
>     private TextView tvInitialBalance, tvRemainingBalance, tvDaysLeft, tvDailyBudget, tvWarning;
>     private Button btnSetup, btnSpend, btnReset;
>     private ProgressBar progressBar;
>
>     // Budget variables
>     private double initialBalance = 0;
>     private double remainingBalance = 0;
>     private int totalDays = 0;
>     private int daysLeft = 0;
>     private double dailyBudget = 0;
>
>     // SharedPreferences keys
>     private static final String PREF_NAME = "BudgetPrefs";
>     private static final String KEY_INITIAL = "initial_balance";
>     private static final String KEY_REMAINING = "remaining_balance";
>     private static final String KEY_DAYS_LEFT = "days_left";
>     private static final String KEY_TOTAL_DAYS = "total_days";
>     private static final String KEY_SETUP_COMPLETE = "setup_complete";
>
>     private SharedPreferences sharedPreferences;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         initializeViews();
>         setupSharedPreferences();
>         loadSavedData();
>         setupClickListeners();
>         updateUI();
>     }
>
>     private void initializeViews() {
>         etInitialBalance = findViewById(R.id.etInitialBalance);
>         etTotalDays = findViewById(R.id.etTotalDays);
>         etExpenseAmount = findViewById(R.id.etExpenseAmount);
>         etExpenseDescription = findViewById(R.id.etExpenseDescription);
>
>         tvInitialBalance = findViewById(R.id.tvInitialBalance);
>         tvRemainingBalance = findViewById(R.id.tvRemainingBalance);
>         tvDaysLeft = findViewById(R.id.tvDaysLeft);
>         tvDailyBudget = findViewById(R.id.tvDailyBudget);
>         tvWarning = findViewById(R.id.tvWarning);
>
>         btnSetup = findViewById(R.id.btnSetup);
>         btnSpend = findViewById(R.id.btnSpend);
>         btnReset = findViewById(R.id.btnReset);
>
>         progressBar = findViewById(R.id.progressBar);
>     }
>
>     private void setupSharedPreferences() {
>         sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>     }
>
>     private void loadSavedData() {
>         initialBalance = sharedPreferences.getFloat(KEY_INITIAL, 0);
>         remainingBalance = sharedPreferences.getFloat(KEY_REMAINING, 0);
>         daysLeft = sharedPreferences.getInt(KEY_DAYS_LEFT, 0);
>         totalDays = sharedPreferences.getInt(KEY_TOTAL_DAYS, 0);
>
>         boolean setupComplete = sharedPreferences.getBoolean(KEY_SETUP_COMPLETE, false);
>
>         if (setupComplete) {
>             calculateDailyBudget();
>             btnSpend.setEnabled(true);
>         }
>     }
>
>     private void setupClickListeners() {
>         btnSetup.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 setupBudget();
>             }
>         });
>
>         btnSpend.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 recordExpense();
>             }
>         });
>
>         btnReset.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 showResetConfirmation();
>             }
>         });
>     }
>
>     private void setupBudget() {
>         String initialStr = etInitialBalance.getText().toString().trim();
>         String daysStr = etTotalDays.getText().toString().trim();
>
>         if (initialStr.isEmpty() || daysStr.isEmpty()) {
>             Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
>             return;
>         }
>
>         try {
>             initialBalance = Double.parseDouble(initialStr);
>             totalDays = Integer.parseInt(daysStr);
>
>             if (initialBalance <= 0 || totalDays <= 0) {
>                 Toast.makeText(this, "Values must be greater than zero", Toast.LENGTH_SHORT).show();
>                 return;
>             }
>
>             remainingBalance = initialBalance;
>             daysLeft = totalDays;
>
>             // Save to SharedPreferences
>             SharedPreferences.Editor editor = sharedPreferences.edit();
>             editor.putFloat(KEY_INITIAL, (float) initialBalance);
>             editor.putFloat(KEY_REMAINING, (float) remainingBalance);
>             editor.putInt(KEY_DAYS_LEFT, daysLeft);
>             editor.putInt(KEY_TOTAL_DAYS, totalDays);
>             editor.putBoolean(KEY_SETUP_COMPLETE, true);
>             editor.apply();
>
>             calculateDailyBudget();
>             btnSpend.setEnabled(true);
>             updateUI();
>
>             Toast.makeText(this, "Budget setup successful!", Toast.LENGTH_SHORT).show();
>
>             // Clear input fields
>             etInitialBalance.setText("");
>             etTotalDays.setText("");
>
>         } catch (NumberFormatException e) {
>             Toast.makeText(this, "Invalid number format", Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     private void recordExpense() {
>         String expenseStr = etExpenseAmount.getText().toString().trim();
>         String description = etExpenseDescription.getText().toString().trim();
>
>         if (expenseStr.isEmpty()) {
>             Toast.makeText(this, "Please enter expense amount", Toast.LENGTH_SHORT).show();
>             return;
>         }
>
>         try {
>             double expense = Double.parseDouble(expenseStr);
>
>             if (expense <= 0) {
>                 Toast.makeText(this, "Expense must be greater than zero", Toast.LENGTH_SHORT).show();
>                 return;
>             }
>
>             if (expense > remainingBalance) {
>                 showInsufficientFundsDialog(expense);
>                 return;
>             }
>
>             // Deduct expense
>             remainingBalance -= expense;
>
>             // Update SharedPreferences
>             SharedPreferences.Editor editor = sharedPreferences.edit();
>             editor.putFloat(KEY_REMAINING, (float) remainingBalance);
>             editor.apply();
>
>             // Check if about to finish money (less than daily budget)
>             if (remainingBalance < dailyBudget) {
>                 showWarningAlert("LOW BALANCE WARNING",
>                         "Your remaining balance is below your daily budget. Please spend carefully!");
>                 tvWarning.setText("⚠️ WARNING: Low balance! Remaining: " + formatCurrency(remainingBalance));
>                 tvWarning.setVisibility(View.VISIBLE);
>             } else {
>                 tvWarning.setVisibility(View.GONE);
>             }
>
>             // Check if money is finished
>             if (remainingBalance <= 0) {
>                 showMoneyFinishedAlert();
>                 btnSpend.setEnabled(false);
>             }
>
>             // Show expense recorded message
>             String message = description.isEmpty() ?
>                     "Expense of " + formatCurrency(expense) + " recorded" :
>                     "Expense '" + description + "' of " + formatCurrency(expense) + " recorded";
>             Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
>
>             // Clear expense input
>             etExpenseAmount.setText("");
>             etExpenseDescription.setText("");
>
>             updateUI();
>
>         } catch (NumberFormatException e) {
>             Toast.makeText(this, "Invalid expense amount", Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     private void calculateDailyBudget() {
>         if (totalDays > 0) {
>             dailyBudget = initialBalance / totalDays;
>         }
>     }
>
>     private void updateUI() {
>         tvInitialBalance.setText(formatCurrency(initialBalance));
>         tvRemainingBalance.setText(formatCurrency(remainingBalance));
>         tvDaysLeft.setText(String.valueOf(daysLeft));
>         tvDailyBudget.setText("Daily Budget: " + formatCurrency(dailyBudget));
>
>         // Update progress bar
>         if (initialBalance > 0) {
>             int progress = (int) ((remainingBalance / initialBalance) * 100);
>             progressBar.setProgress(progress);
>         }
>
>         // Check color for remaining balance
>         if (remainingBalance < dailyBudget && remainingBalance > 0) {
>             tvRemainingBalance.setTextColor(getResources().getColor(android.R.color.holo_orange_dark));
>         } else if (remainingBalance <= 0) {
>             tvRemainingBalance.setTextColor(getResources().getColor(android.R.color.holo_red_dark));
>         } else {
>             tvRemainingBalance.setTextColor(getResources().getColor(android.R.color.holo_green_dark));
>         }
>     }
>
>     private void showInsufficientFundsDialog(double attemptedExpense) {
>         new AlertDialog.Builder(this)
>                 .setTitle("Insufficient Funds")
>                 .setMessage("You cannot spend " + formatCurrency(attemptedExpense) +
>                         " because your remaining balance is only " + formatCurrency(remainingBalance))
>                 .setPositiveButton("OK", null)
>                 .setIcon(android.R.drawable.ic_dialog_alert)
>                 .show();
>     }
>
>     private void showWarningAlert(String title, String message) {
>         new AlertDialog.Builder(this)
>                 .setTitle(title)
>                 .setMessage(message)
>                 .setPositiveButton("I Understand", null)
>                 .setIcon(android.R.drawable.ic_dialog_info)
>                 .show();
>     }
>
>     private void showMoneyFinishedAlert() {
>         new AlertDialog.Builder(this)
>                 .setTitle("MONEY FINISHED")
>                 .setMessage("You have spent all your money! Please reset your budget to continue.")
>                 .setPositiveButton("OK", null)
>                 .setIcon(android.R.drawable.ic_dialog_alert)
>                 .show();
>     }
>
>     private void showResetConfirmation() {
>         new AlertDialog.Builder(this)
>                 .setTitle("Reset Budget")
>                 .setMessage("Are you sure you want to reset all budget data?")
>                 .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
>                     @Override
>                     public void onClick(DialogInterface dialog, int which) {
>                         resetBudget();
>                     }
>                 })
>                 .setNegativeButton("No", null)
>                 .show();
>     }
>
>     private void resetBudget() {
>         // Clear SharedPreferences
>         SharedPreferences.Editor editor = sharedPreferences.edit();
>         editor.clear();
>         editor.apply();
>
>         // Reset variables
>         initialBalance = 0;
>         remainingBalance = 0;
>         totalDays = 0;
>         daysLeft = 0;
>         dailyBudget = 0;
>
>         // Update UI
>         btnSpend.setEnabled(false);
>         tvWarning.setVisibility(View.GONE);
>         updateUI();
>
>         Toast.makeText(this, "Budget reset successfully", Toast.LENGTH_SHORT).show();
>     }
>
>     private String formatCurrency(double amount) {
>         return String.format("TZS %,.2f", amount);
>     }
> }
> ```
>
> ## 3. AndroidManifest.xml
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <manifest xmlns:android="http://schemas.android.com/apk/res/android"
>     package="com.example.budgetplanner">
>
>     <application
>         android:allowBackup="true"
>         android:icon="@mipmap/ic_launcher"
>         android:label="@string/app_name"
>         android:theme="@style/AppTheme">
>
>         <activity
>             android:name=".BudgetPlanner"
>             android:exported="true">
>             <intent-filter>
>                 <action android:name="android.intent.action.MAIN" />
>                 <category android:name="android.intent.category.LAUNCHER" />
>             </intent-filter>
>         </activity>
>     </application>
> </manifest>
> ```
>
> ## Key Features Implemented:
>
> 1. **Initial Setup**: Student enters initial balance and number of days
> 2. **Balance Tracking**: Real-time display of initial and remaining balance
> 3. **Daily Budget Calculation**: Automatically calculates daily spending limit
> 4. **Expense Recording**: Deducts expenses from remaining balance
> 5. **Low Balance Alert**: Warns when remaining balance falls below daily budget
> 6. **Spending Prevention**: Cannot spend more than available balance
> 7. **Progress Visualization**: Progress bar shows spending progress
> 8. **Data Persistence**: Saves budget data using SharedPreferences
> 9. **Reset Functionality**: Allows resetting the budget
> 10. **User-friendly Interface**: Clear warnings and alerts

---

### Question Five

Currently, UDOM SACCOS have no tool to automate its operations as a result there is a delay in providing services to its customers. You have been asked by the management of UDOOM SACCOS to develop a mobile application that will store the information of its customers. The app should store name, college, age, gender and monthly contribution of its customers. The management want to show the reports of how customers are contributing monthly.

The management also wants to show the dates of different events within SACCOS such as the date of annual meeting etc. The management suggests the following features to be used: radio button for gender and spinner for college. Use progress bar to show the monthly contributions and calendar to show the dates of the events. Based on the given requirements, you found that the application has only two activities i.e. ActivityOne and ActivityTwo.

*(20 Marks)*

---

**(a) Using the methods of Intent class show how you will send the customer's data to the second activity.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Sending customer data from ActivityOne to ActivityTwo using Intent:**
>
> **In ActivityOne.java:**
> ```java
> public class ActivityOne extends AppCompatActivity {
>
>     // UI Elements
>     private EditText etName, etAge, etContribution;
>     private Spinner spinnerCollege;
>     private RadioGroup radioGroupGender;
>     private Button btnViewReport;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_one);
>
>         initializeViews();
>         setupSpinner();
>     }
>
>     private void initializeViews() {
>         etName = findViewById(R.id.etName);
>         etAge = findViewById(R.id.etAge);
>         etContribution = findViewById(R.id.etContribution);
>         spinnerCollege = findViewById(R.id.spinnerCollege);
>         radioGroupGender = findViewById(R.id.radioGroupGender);
>         btnViewReport = findViewById(R.id.btnViewReport);
>
>         btnViewReport.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 sendCustomerDataToSecondActivity();
>             }
>         });
>     }
>
>     private void setupSpinner() {
>         ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
>                 R.array.colleges_array, android.R.layout.simple_spinner_item);
>         adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
>         spinnerCollege.setAdapter(adapter);
>     }
>
>     // Method to send customer data to ActivityTwo
>     private void sendCustomerDataToSecondActivity() {
>         // Validate input
>         if (!validateInput()) {
>             return;
>         }
>
>         // Collect customer data from input fields
>         String name = etName.getText().toString().trim();
>         String college = spinnerCollege.getSelectedItem().toString();
>         int age = Integer.parseInt(etAge.getText().toString().trim());
>
>         // Get selected gender from RadioGroup
>         int selectedGenderId = radioGroupGender.getCheckedRadioButtonId();
>         RadioButton selectedGenderButton = findViewById(selectedGenderId);
>         String gender = selectedGenderButton.getText().toString();
>
>         double monthlyContribution = Double.parseDouble(etContribution.getText().toString().trim());
>
>         // Create Intent
>         Intent intent = new Intent(ActivityOne.this, ActivityTwo.class);
>
>         // Method 1: Using individual putExtra() methods
>         intent.putExtra("customer_name", name);
>         intent.putExtra("customer_college", college);
>         intent.putExtra("customer_age", age);
>         intent.putExtra("customer_gender", gender);
>         intent.putExtra("customer_contribution", monthlyContribution);
>
>         // Method 2: Using Bundle (alternative approach)
>         Bundle customerBundle = new Bundle();
>         customerBundle.putString("name", name);
>         customerBundle.putString("college", college);
>         customerBundle.putInt("age", age);
>         customerBundle.putString("gender", gender);
>         customerBundle.putDouble("contribution", monthlyContribution);
>         intent.putExtras(customerBundle);
>
>         // Method 3: Using putExtras() with multiple values (for demonstration)
>         intent.putExtra("customer_data", new String[]{name, college, gender});
>         intent.putExtra("customer_age", age);
>         intent.putExtra("customer_contribution", monthlyContribution);
>
>         // Add current date and time
>         SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
>         String currentDateTime = sdf.format(new Date());
>         intent.putExtra("report_generated_time", currentDateTime);
>
>         // Add flags if needed (optional)
>         intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
>
>         // Start the second activity
>         startActivity(intent);
>     }
>
>     private boolean validateInput() {
>         if (etName.getText().toString().trim().isEmpty()) {
>             etName.setError("Name is required");
>             etName.requestFocus();
>             return false;
>         }
>
>         if (etAge.getText().toString().trim().isEmpty()) {
>             etAge.setError("Age is required");
>             etAge.requestFocus();
>             return false;
>         }
>
>         if (etContribution.getText().toString().trim().isEmpty()) {
>             etContribution.setError("Monthly contribution is required");
>             etContribution.requestFocus();
>             return false;
>         }
>
>         if (radioGroupGender.getCheckedRadioButtonId() == -1) {
>             Toast.makeText(this, "Please select gender", Toast.LENGTH_SHORT).show();
>             return false;
>         }
>
>         return true;
>     }
>
>     // Alternative: Send multiple customers data (for batch reports)
>     private void sendMultipleCustomersData(ArrayList<Customer> customersList) {
>         Intent intent = new Intent(ActivityOne.this, ActivityTwo.class);
>
>         // Convert ArrayList to Serializable
>         intent.putExtra("customers_list", customersList);
>
>         // Or convert to JSON string using Gson library
>         // Gson gson = new Gson();
>         // String customersJson = gson.toJson(customersList);
>         // intent.putExtra("customers_json", customersJson);
>
>         startActivity(intent);
>     }
>
>     // Customer class for multiple data (Serializable for intent transfer)
>     class Customer implements Serializable {
>         String name, college, gender;
>         int age;
>         double contribution;
>
>         public Customer(String name, String college, int age, String gender, double contribution) {
>             this.name = name;
>             this.college = college;
>             this.age = age;
>             this.gender = gender;
>             this.contribution = contribution;
>         }
>     }
> }
> ```

---

**(b) Using the methods of Intent class show how you will receive the customer's data within the second activity.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Receiving customer data in ActivityTwo:**
>
> **In ActivityTwo.java:**
> ```java
> public class ActivityTwo extends AppCompatActivity {
>
>     private TextView tvName, tvCollege, tvAge, tvGender, tvContribution, tvReportTime;
>     private ProgressBar progressBar;
>     private CalendarView calendarView;
>     private Button btnBack;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_two);
>
>         initializeViews();
>         receiveCustomerData();
>         setupCalendar();
>     }
>
>     private void initializeViews() {
>         tvName = findViewById(R.id.tvName);
>         tvCollege = findViewById(R.id.tvCollege);
>         tvAge = findViewById(R.id.tvAge);
>         tvGender = findViewById(R.id.tvGender);
>         tvContribution = findViewById(R.id.tvContribution);
>         tvReportTime = findViewById(R.id.tvReportTime);
>         progressBar = findViewById(R.id.progressBar);
>         calendarView = findViewById(R.id.calendarView);
>         btnBack = findViewById(R.id.btnBack);
>
>         btnBack.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 finish();
>             }
>         });
>     }
>
>     private void receiveCustomerData() {
>         // Get the intent that started this activity
>         Intent receivedIntent = getIntent();
>
>         // Method 1: Using getStringExtra() and getIntExtra() etc.
>         String name = receivedIntent.getStringExtra("customer_name");
>         String college = receivedIntent.getStringExtra("customer_college");
>         int age = receivedIntent.getIntExtra("customer_age", 0);
>         String gender = receivedIntent.getStringExtra("customer_gender");
>         double contribution = receivedIntent.getDoubleExtra("customer_contribution", 0.0);
>         String reportTime = receivedIntent.getStringExtra("report_generated_time");
>
>         // Method 2: Using Bundle
>         Bundle bundle = receivedIntent.getExtras();
>         if (bundle != null) {
>             name = bundle.getString("name", name);
>             college = bundle.getString("college", college);
>             age = bundle.getInt("age", age);
>             gender = bundle.getString("gender", gender);
>             contribution = bundle.getDouble("contribution", contribution);
>         }
>
>         // Method 3: With null checking and default values
>         if (receivedIntent.hasExtra("customer_name")) {
>             name = receivedIntent.getStringExtra("customer_name");
>         } else {
>             name = "No name provided";
>         }
>
>         // Method 4: Getting array data (alternative approach)
>         String[] customerData = receivedIntent.getStringArrayExtra("customer_data");
>         if (customerData != null && customerData.length >= 3) {
>             name = customerData[0];
>             college = customerData[1];
>             gender = customerData[2];
>         }
>
>         // Display the received data
>         displayCustomerData(name, college, age, gender, contribution, reportTime);
>
>         // Show contribution on progress bar
>         updateContributionProgress(contribution);
>
>         // Show toast with received data summary
>         Toast.makeText(this, "Data received for: " + name, Toast.LENGTH_SHORT).show();
>     }
>
>     private void displayCustomerData(String name, String college, int age,
>                                      String gender, double contribution, String reportTime) {
>         tvName.setText("Name: " + (name != null ? name : "N/A"));
>         tvCollege.setText("College: " + (college != null ? college : "N/A"));
>         tvAge.setText("Age: " + age);
>         tvGender.setText("Gender: " + (gender != null ? gender : "N/A"));
>         tvContribution.setText("Monthly Contribution: TZS " +
>                 String.format("%,.2f", contribution));
>
>         if (reportTime != null && !reportTime.isEmpty()) {
>             tvReportTime.setText("Report Generated: " + reportTime);
>         } else {
>             tvReportTime.setVisibility(View.GONE);
>         }
>     }
>
>     private void updateContributionProgress(double contribution) {
>         // Assuming maximum contribution is 500,000 TZS for progress bar scaling
>         double maxContribution = 500000.0;
>         int progress = (int) ((contribution / maxContribution) * 100);
>
>         if (progress > 100) progress = 100;
>         progressBar.setProgress(progress);
>
>         // Set progress bar color based on contribution level
>         if (progress < 30) {
>             progressBar.setProgressTintList(ColorStateList.valueOf(
>                     getResources().getColor(android.R.color.holo_orange_dark)));
>         } else if (progress < 70) {
>             progressBar.setProgressTintList(ColorStateList.valueOf(
>                     getResources().getColor(android.R.color.holo_blue_dark)));
>         } else {
>             progressBar.setProgressTintList(ColorStateList.valueOf(
>                     getResources().getColor(android.R.color.holo_green_dark)));
>         }
>     }
>
>     private void setupCalendar() {
>         calendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
>             @Override
>             public void onSelectedDayChange(@NonNull CalendarView view,
>                                             int year, int month, int dayOfMonth) {
>                 String selectedDate = dayOfMonth + "/" + (month + 1) + "/" + year;
>                 checkForSACCOSEvent(selectedDate);
>             }
>         });
>
>         // Mark SACCOS events on calendar
>         markSACCOSEvents();
>     }
>
>     private void checkForSACCOSEvent(String date) {
>         // Check if the selected date has an event
>         HashMap<String, String> events = getSACCOSEvents();
>
>         if (events.containsKey(date)) {
>             new AlertDialog.Builder(this)
>                     .setTitle("SACCOS EVENT")
>                     .setMessage("Event: " + events.get(date))
>                     .setPositiveButton("OK", null)
>                     .setIcon(android.R.drawable.ic_dialog_info)
>                     .show();
>         } else {
>             Toast.makeText(this, "No event scheduled for " + date,
>                     Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     private HashMap<String, String> getSACCOSEvents() {
>         HashMap<String, String> events = new HashMap<>();
>         events.put("15/3/2024", "Annual General Meeting");
>         events.put("1/4/2024", "Monthly Contribution Deadline");
>         events.put("20/4/2024", "Board Meeting");
>         events.put("1/5/2024", "Dividend Payout Day");
>         events.put("25/12/2024", "SACCOS Christmas Party");
>         events.put("30/6/2024", "Financial Year End Meeting");
>         events.put("15/1/2024", "New Members Orientation");
>         return events;
>     }
>
>     private void markSACCOSEvents() {
>         // This would require custom calendar implementation
>         // to highlight dates with events. For demonstration,
>         // we're using a simple Toast notification when dates are selected.
>     }
>
>     // Method to receive multiple customers (if sent as list)
>     private void receiveMultipleCustomers(Intent intent) {
>         ArrayList<Customer> customersList = (ArrayList<Customer>) intent.getSerializableExtra("customers_list");
>
>         if (customersList != null) {
>             StringBuilder report = new StringBuilder();
>             double totalContributions = 0;
>
>             for (Customer customer : customersList) {
>                 report.append(customer.name).append(": TZS ")
>                       .append(customer.contribution).append("\n");
>                 totalContributions += customer.contribution;
>             }
>
>             report.append("\nTotal Contributions: TZS ").append(totalContributions);
>             report.append("\nAverage: TZS ").append(totalContributions / customersList.size());
>
>             // Display in a TextView or AlertDialog
>             new AlertDialog.Builder(this)
>                     .setTitle("Multiple Customers Report")
>                     .setMessage(report.toString())
>                     .setPositiveButton("OK", null)
>                     .show();
>         }
>     }
>
>     // Customer class (must match the one in ActivityOne)
>     class Customer implements Serializable {
>         String name, college, gender;
>         int age;
>         double contribution;
>     }
> }
> ```

---

**(c) By the help of SQLiteOpenHelper class, show how you can save the customer's details in a database. Use user and customer as the name of the database and table respectively.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete SQLiteOpenHelper Implementation for Customer Database:**
>
> ## 1. CustomerContract.java - Contract Class
> ```java
> import android.provider.BaseColumns;
>
> public class CustomerContract {
>     private CustomerContract() {}
>
>     public static class CustomerEntry implements BaseColumns {
>         public static final String TABLE_NAME = "customer";
>         public static final String COLUMN_NAME = "name";
>         public static final String COLUMN_COLLEGE = "college";
>         public static final String COLUMN_AGE = "age";
>         public static final String COLUMN_GENDER = "gender";
>         public static final String COLUMN_CONTRIBUTION = "contribution";
>         public static final String COLUMN_REGISTRATION_DATE = "registration_date";
>         public static final String COLUMN_IS_ACTIVE = "is_active";
>     }
> }
> ```
>
> ## 2. CustomerDbHelper.java - SQLiteOpenHelper Implementation
> ```java
> import android.content.ContentValues;
> import android.content.Context;
> import android.database.Cursor;
> import android.database.sqlite.SQLiteDatabase;
> import android.database.sqlite.SQLiteOpenHelper;
> import android.util.Log;
> import java.text.SimpleDateFormat;
> import java.util.ArrayList;
> import java.util.Date;
> import java.util.List;
> import java.util.Locale;
>
> public class CustomerDbHelper extends SQLiteOpenHelper {
>
>     // Database information
>     private static final String DATABASE_NAME = "user.db";
>     private static final int DATABASE_VERSION = 1;
>
>     // Table name
>     private static final String TABLE_CUSTOMER = "customer";
>
>     // Column names
>     private static final String KEY_ID = "id";
>     private static final String KEY_NAME = "name";
>     private static final String KEY_COLLEGE = "college";
>     private static final String KEY_AGE = "age";
>     private static final String KEY_GENDER = "gender";
>     private static final String KEY_CONTRIBUTION = "contribution";
>     private static final String KEY_REG_DATE = "registration_date";
>     private static final String KEY_IS_ACTIVE = "is_active";
>
>     // Create table SQL statement
>     private static final String CREATE_CUSTOMER_TABLE = "CREATE TABLE " + TABLE_CUSTOMER + "("
>             + KEY_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, "
>             + KEY_NAME + " TEXT NOT NULL, "
>             + KEY_COLLEGE + " TEXT, "
>             + KEY_AGE + " INTEGER, "
>             + KEY_GENDER + " TEXT, "
>             + KEY_CONTRIBUTION + " REAL DEFAULT 0.0, "
>             + KEY_REG_DATE + " TEXT, "
>             + KEY_IS_ACTIVE + " INTEGER DEFAULT 1)";
>
>     // Drop table SQL statement
>     private static final String DROP_CUSTOMER_TABLE = "DROP TABLE IF EXISTS " + TABLE_CUSTOMER;
>
>     // Constructor
>     public CustomerDbHelper(Context context) {
>         super(context, DATABASE_NAME, null, DATABASE_VERSION);
>     }
>
>     @Override
>     public void onCreate(SQLiteDatabase db) {
>         // Create the customer table
>         db.execSQL(CREATE_CUSTOMER_TABLE);
>         Log.d("Database", "Customer table created successfully");
>     }
>
>     @Override
>     public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         // Handle database upgrades
>         Log.w("Database", "Upgrading database from version " + oldVersion + " to " + newVersion);
>
>         // Drop older table if exists
>         db.execSQL(DROP_CUSTOMER_TABLE);
>
>         // Create new table
>         onCreate(db);
>     }
>
>     @Override
>     public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         // Handle downgrades
>         onUpgrade(db, oldVersion, newVersion);
>     }
>
>     // CRUD Operations
>
>     /**
>      * Insert a new customer into the database
>      */
>     public long insertCustomer(String name, String college, int age,
>                                String gender, double contribution) {
>         SQLiteDatabase db = this.getWritableDatabase();
>         ContentValues values = new ContentValues();
>
>         values.put(KEY_NAME, name);
>         values.put(KEY_COLLEGE, college);
>         values.put(KEY_AGE, age);
>         values.put(KEY_GENDER, gender);
>         values.put(KEY_CONTRIBUTION, contribution);
>
>         // Get current date
>         SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
>         String currentDate = sdf.format(new Date());
>         values.put(KEY_REG_DATE, currentDate);
>         values.put(KEY_IS_ACTIVE, 1); // 1 = active, 0 = inactive
>
>         // Insert row
>         long id = db.insert(TABLE_CUSTOMER, null, values);
>         db.close(); // Close database connection
>
>         Log.d("Database", "Customer inserted with ID: " + id);
>         return id;
>     }
>
>     /**
>      * Insert customer using Customer object
>      */
>     public long insertCustomer(Customer customer) {
>         return insertCustomer(
>                 customer.getName(),
>                 customer.getCollege(),
>                 customer.getAge(),
>                 customer.getGender(),
>                 customer.getMonthlyContribution()
>         );
>     }
>
>     /**
>      * Get single customer by ID
>      */
>     public Customer getCustomer(int id) {
>         SQLiteDatabase db = this.getReadableDatabase();
>
>         Cursor cursor = db.query(TABLE_CUSTOMER,
>                 new String[]{KEY_ID, KEY_NAME, KEY_COLLEGE, KEY_AGE,
>                         KEY_GENDER, KEY_CONTRIBUTION, KEY_REG_DATE, KEY_IS_ACTIVE},
>                 KEY_ID + "=?",
>                 new String[]{String.valueOf(id)},
>                 null, null, null, null);
>
>         Customer customer = null;
>         if (cursor != null && cursor.moveToFirst()) {
>             customer = new Customer();
>             customer.setId(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_ID)));
>             customer.setName(cursor.getString(cursor.getColumnIndexOrThrow(KEY_NAME)));
>             customer.setCollege(cursor.getString(cursor.getColumnIndexOrThrow(KEY_COLLEGE)));
>             customer.setAge(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_AGE)));
>             customer.setGender(cursor.getString(cursor.getColumnIndexOrThrow(KEY_GENDER)));
>             customer.setMonthlyContribution(cursor.getDouble(cursor.getColumnIndexOrThrow(KEY_CONTRIBUTION)));
>             customer.setRegistrationDate(cursor.getString(cursor.getColumnIndexOrThrow(KEY_REG_DATE)));
>             customer.setActive(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_IS_ACTIVE)) == 1);
>
>             cursor.close();
>         }
>
>         db.close();
>         return customer;
>     }
>
>     /**
>      * Get all customers
>      */
>     public List<Customer> getAllCustomers() {
>         List<Customer> customerList = new ArrayList<>();
>
>         // Select All Query
>         String selectQuery = "SELECT * FROM " + TABLE_CUSTOMER + " ORDER BY " + KEY_NAME + " ASC";
>
>         SQLiteDatabase db = this.getReadableDatabase();
>         Cursor cursor = db.rawQuery(selectQuery, null);
>
>         // Loop through all rows and add to list
>         if (cursor.moveToFirst()) {
>             do {
>                 Customer customer = new Customer();
>                 customer.setId(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_ID)));
>                 customer.setName(cursor.getString(cursor.getColumnIndexOrThrow(KEY_NAME)));
>                 customer.setCollege(cursor.getString(cursor.getColumnIndexOrThrow(KEY_COLLEGE)));
>                 customer.setAge(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_AGE)));
>                 customer.setGender(cursor.getString(cursor.getColumnIndexOrThrow(KEY_GENDER)));
>                 customer.setMonthlyContribution(cursor.getDouble(cursor.getColumnIndexOrThrow(KEY_CONTRIBUTION)));
>                 customer.setRegistrationDate(cursor.getString(cursor.getColumnIndexOrThrow(KEY_REG_DATE)));
>                 customer.setActive(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_IS_ACTIVE)) == 1);
>
>                 customerList.add(customer);
>             } while (cursor.moveToNext());
>         }
>
>         cursor.close();
>         db.close();
>
>         return customerList;
>     }
>
>     /**
>      * Get active customers only
>      */
>     public List<Customer> getActiveCustomers() {
>         List<Customer> customerList = new ArrayList<>();
>
>         SQLiteDatabase db = this.getReadableDatabase();
>         Cursor cursor = db.query(TABLE_CUSTOMER,
>                 null,
>                 KEY_IS_ACTIVE + "=?",
>                 new String[]{"1"},
>                 null, null, KEY_NAME + " ASC");
>
>         if (cursor.moveToFirst()) {
>             do {
>                 Customer customer = new Customer();
>                 customer.setId(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_ID)));
>                 customer.setName(cursor.getString(cursor.getColumnIndexOrThrow(KEY_NAME)));
>                 customer.setCollege(cursor.getString(cursor.getColumnIndexOrThrow(KEY_COLLEGE)));
>                 customer.setAge(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_AGE)));
>                 customer.setGender(cursor.getString(cursor.getColumnIndexOrThrow(KEY_GENDER)));
>                 customer.setMonthlyContribution(cursor.getDouble(cursor.getColumnIndexOrThrow(KEY_CONTRIBUTION)));
>                 customerList.add(customer);
>             } while (cursor.moveToNext());
>         }
>
>         cursor.close();
>         db.close();
>
>         return customerList;
>     }
>
>     /**
>      * Update customer details
>      */
>     public int updateCustomer(Customer customer) {
>         SQLiteDatabase db = this.getWritableDatabase();
>
>         ContentValues values = new ContentValues();
>         values.put(KEY_NAME, customer.getName());
>         values.put(KEY_COLLEGE, customer.getCollege());
>         values.put(KEY_AGE, customer.getAge());
>         values.put(KEY_GENDER, customer.getGender());
>         values.put(KEY_CONTRIBUTION, customer.getMonthlyContribution());
>         values.put(KEY_IS_ACTIVE, customer.isActive() ? 1 : 0);
>
>         // Updating row
>         return db.update(TABLE_CUSTOMER, values, KEY_ID + " = ?",
>                 new String[]{String.valueOf(customer.getId())});
>     }
>
>     /**
>      * Update monthly contribution
>      */
>     public int updateContribution(int customerId, double newContribution) {
>         SQLiteDatabase db = this.getWritableDatabase();
>
>         ContentValues values = new ContentValues();
>         values.put(KEY_CONTRIBUTION, newContribution);
>
>         return db.update(TABLE_CUSTOMER, values, KEY_ID + " = ?",
>                 new String[]{String.valueOf(customerId)});
>     }
>
>     /**
>      * Delete customer
>      */
>     public void deleteCustomer(int id) {
>         SQLiteDatabase db = this.getWritableDatabase();
>         db.delete(TABLE_CUSTOMER, KEY_ID + " = ?",
>                 new String[]{String.valueOf(id)});
>         db.close();
>     }
>
>     /**
>      * Soft delete (deactivate) customer
>      */
>     public int deactivateCustomer(int id) {
>         SQLiteDatabase db = this.getWritableDatabase();
>
>         ContentValues values = new ContentValues();
>         values.put(KEY_IS_ACTIVE, 0);
>
>         return db.update(TABLE_CUSTOMER, values, KEY_ID + " = ?",
>                 new String[]{String.valueOf(id)});
>     }
>
>     /**
>      * Get total number of customers
>      */
>     public int getCustomersCount() {
>         String countQuery = "SELECT * FROM " + TABLE_CUSTOMER;
>         SQLiteDatabase db = this.getReadableDatabase();
>         Cursor cursor = db.rawQuery(countQuery, null);
>         int count = cursor.getCount();
>         cursor.close();
>         db.close();
>         return count;
>     }
>
>     /**
>      * Get total contributions sum
>      */
>     public double getTotalContributions() {
>         SQLiteDatabase db = this.getReadableDatabase();
>         Cursor cursor = db.rawQuery("SELECT SUM(" + KEY_CONTRIBUTION + ") FROM " + TABLE_CUSTOMER, null);
>
>         double total = 0;
>         if (cursor.moveToFirst()) {
>             total = cursor.getDouble(0);
>         }
>
>         cursor.close();
>         db.close();
>         return total;
>     }
>
>     /**
>      * Get customers by college
>      */
>     public List<Customer> getCustomersByCollege(String college) {
>         List<Customer> customerList = new ArrayList<>();
>
>         SQLiteDatabase db = this.getReadableDatabase();
>         Cursor cursor = db.query(TABLE_CUSTOMER,
>                 null,
>                 KEY_COLLEGE + "=?",
>                 new String[]{college},
>                 null, null, KEY_NAME + " ASC");
>
>         if (cursor.moveToFirst()) {
>             do {
>                 Customer customer = new Customer();
>                 customer.setId(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_ID)));
>                 customer.setName(cursor.getString(cursor.getColumnIndexOrThrow(KEY_NAME)));
>                 customer.setCollege(cursor.getString(cursor.getColumnIndexOrThrow(KEY_COLLEGE)));
>                 customer.setAge(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_AGE)));
>                 customer.setGender(cursor.getString(cursor.getColumnIndexOrThrow(KEY_GENDER)));
>                 customer.setMonthlyContribution(cursor.getDouble(cursor.getColumnIndexOrThrow(KEY_CONTRIBUTION)));
>                 customerList.add(customer);
>             } while (cursor.moveToNext());
>         }
>
>         cursor.close();
>         db.close();
>         return customerList;
>     }
>
>     /**
>      * Search customers by name
>      */
>     public List<Customer> searchCustomers(String searchTerm) {
>         List<Customer> customerList = new ArrayList<>();
>
>         SQLiteDatabase db = this.getReadableDatabase();
>         Cursor cursor = db.query(TABLE_CUSTOMER,
>                 null,
>                 KEY_NAME + " LIKE ?",
>                 new String[]{"%" + searchTerm + "%"},
>                 null, null, KEY_NAME + " ASC");
>
>         if (cursor.moveToFirst()) {
>             do {
>                 Customer customer = new Customer();
>                 customer.setId(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_ID)));
>                 customer.setName(cursor.getString(cursor.getColumnIndexOrThrow(KEY_NAME)));
>                 customer.setCollege(cursor.getString(cursor.getColumnIndexOrThrow(KEY_COLLEGE)));
>                 customer.setAge(cursor.getInt(cursor.getColumnIndexOrThrow(KEY_AGE)));
>                 customer.setGender(cursor.getString(cursor.getColumnIndexOrThrow(KEY_GENDER)));
>                 customer.setMonthlyContribution(cursor.getDouble(cursor.getColumnIndexOrThrow(KEY_CONTRIBUTION)));
>                 customerList.add(customer);
>             } while (cursor.moveToNext());
>         }
>
>         cursor.close();
>         db.close();
>         return customerList;
>     }
>
>     /**
>      * Get contribution report summary
>      */
>     public String getContributionReport() {
>         StringBuilder report = new StringBuilder();
>
>         SQLiteDatabase db = this.getReadableDatabase();
>
>         // Get total contributions
>         Cursor cursor = db.rawQuery("SELECT SUM(" + KEY_CONTRIBUTION + "), AVG(" + KEY_CONTRIBUTION + "), " +
>                 "MAX(" + KEY_CONTRIBUTION + "), MIN(" + KEY_CONTRIBUTION + ") FROM " + TABLE_CUSTOMER, null);
>
>         if (cursor.moveToFirst()) {
>             double total = cursor.getDouble(0);
>             double average = cursor.getDouble(1);
>             double max = cursor.getDouble(2);
>             double min = cursor.getDouble(3);
>
>             report.append("=== CONTRIBUTION REPORT ===\n");
>             report.append("Total Contributions: TZS ").append(String.format("%,.2f", total)).append("\n");
>             report.append("Average Contribution: TZS ").append(String.format("%,.2f", average)).append("\n");
>             report.append("Highest Contribution: TZS ").append(String.format("%,.2f", max)).append("\n");
>             report.append("Lowest Contribution: TZS ").append(String.format("%,.2f", min)).append("\n");
>             report.append("Number of Customers: ").append(getCustomersCount()).append("\n");
>         }
>         cursor.close();
>
>         // Get contributions by college
>         cursor = db.rawQuery("SELECT " + KEY_COLLEGE + ", SUM(" + KEY_CONTRIBUTION + "), COUNT(*) " +
>                 "FROM " + TABLE_CUSTOMER + " GROUP BY " + KEY_COLLEGE, null);
>
>         report.append("\n=== CONTRIBUTIONS BY COLLEGE ===\n");
>         if (cursor.moveToFirst()) {
>             do {
>                 String college = cursor.getString(0);
>                 double total = cursor.getDouble(1);
>                 int count = cursor.getInt(2);
>                 report.append(college).append(": TZS ").append(String.format("%,.2f", total))
>                       .append(" (").append(count).append(" customers)\n");
>             } while (cursor.moveToNext());
>         }
>
>         cursor.close();
>         db.close();
>
>         return report.toString();
>     }
>
>     /**
>      * Insert sample data for testing
>      */
>     public void insertSampleData() {
>         SQLiteDatabase db = this.getWritableDatabase();
>         ContentValues values = new ContentValues();
>
>         // Sample customer 1
>         values.put(KEY_NAME, "John Doe");
>         values.put(KEY_COLLEGE, "CoET");
>         values.put(KEY_AGE, 25);
>         values.put(KEY_GENDER, "Male");
>         values.put(KEY_CONTRIBUTION, 150000.00);
>         values.put(KEY_REG_DATE, getCurrentDateTime());
>         values.put(KEY_IS_ACTIVE, 1);
>         db.insert(TABLE_CUSTOMER, null, values);
>
>         // Sample customer 2
>         values.clear();
>         values.put(KEY_NAME, "Jane Smith");
>         values.put(KEY_COLLEGE, "CoHU");
>         values.put(KEY_AGE, 23);
>         values.put(KEY_GENDER, "Female");
>         values.put(KEY_CONTRIBUTION, 120000.00);
>         values.put(KEY_REG_DATE, getCurrentDateTime());
>         values.put(KEY_IS_ACTIVE, 1);
>         db.insert(TABLE_CUSTOMER, null, values);
>
>         // Sample customer 3
>         values.clear();
>         values.put(KEY_NAME, "Peter Johnson");
>         values.put(KEY_COLLEGE, "CoNAS");
>         values.put(KEY_AGE, 27);
>         values.put(KEY_GENDER, "Male");
>         values.put(KEY_CONTRIBUTION, 200000.00);
>         values.put(KEY_REG_DATE, getCurrentDateTime());
>         values.put(KEY_IS_ACTIVE, 1);
>         db.insert(TABLE_CUSTOMER, null, values);
>
>         // Sample customer 4
>         values.clear();
>         values.put(KEY_NAME, "Mary Williams");
>         values.put(KEY_COLLEGE, "CoET");
>         values.put(KEY_AGE, 26);
>         values.put(KEY_GENDER, "Female");
>         values.put(KEY_CONTRIBUTION, 180000.00);
>         values.put(KEY_REG_DATE, getCurrentDateTime());
>         values.put(KEY_IS_ACTIVE, 1);
>         db.insert(TABLE_CUSTOMER, null, values);
>
>         db.close();
>         Log.d("Database", "Sample data inserted successfully");
>     }
>
>     private String getCurrentDateTime() {
>         SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
>         return sdf.format(new Date());
>     }
> }
> ```
>
> ## 3. Customer.java - Model Class
> ```java
> import java.io.Serializable;
>
> public class Customer implements Serializable {
>     private int id;
>     private String name;
>     private String college;
>     private int age;
>     private String gender;
>     private double monthlyContribution;
>     private String registrationDate;
>     private boolean isActive;
>
>     // Constructors
>     public Customer() {}
>
>     public Customer(String name, String college, int age,
>                     String gender, double monthlyContribution) {
>         this.name = name;
>         this.college = college;
>         this.age = age;
>         this.gender = gender;
>         this.monthlyContribution = monthlyContribution;
>         this.isActive = true;
>     }
>
>     // Getters and Setters
>     public int getId() { return id; }
>     public void setId(int id) { this.id = id; }
>
>     public String getName() { return name; }
>     public void setName(String name) { this.name = name; }
>
>     public String getCollege() { return college; }
>     public void setCollege(String college) { this.college = college; }
>
>     public int getAge() { return age; }
>     public void setAge(int age) { this.age = age; }
>
>     public String getGender() { return gender; }
>     public void setGender(String gender) { this.gender = gender; }
>
>     public double getMonthlyContribution() { return monthlyContribution; }
>     public void setMonthlyContribution(double monthlyContribution) {
>         this.monthlyContribution = monthlyContribution;
>     }
>
>     public String getRegistrationDate() { return registrationDate; }
>     public void setRegistrationDate(String registrationDate) {
>         this.registrationDate = registrationDate;
>     }
>
>     public boolean isActive() { return isActive; }
>     public void setActive(boolean active) { isActive = active; }
>
>     @Override
>     public String toString() {
>         return "Customer{" +
>                 "id=" + id +
>                 ", name='" + name + '\'' +
>                 ", college='" + college + '\'' +
>                 ", age=" + age +
>                 ", gender='" + gender + '\'' +
>                 ", monthlyContribution=" + monthlyContribution +
>                 '}';
>     }
> }
> ```
>
> ## 4. Usage Example in ActivityOne
> ```java
> public class ActivityOne extends AppCompatActivity {
>     private CustomerDbHelper dbHelper;
>     private EditText etName, etAge, etContribution;
>     private Spinner spinnerCollege;
>     private RadioGroup radioGroupGender;
>     private Button btnSave, btnViewReport;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_one);
>
>         // Initialize database helper
>         dbHelper = new CustomerDbHelper(this);
>
>         initializeViews();
>         setupListeners();
>     }
>
>     private void initializeViews() {
>         etName = findViewById(R.id.etName);
>         etAge = findViewById(R.id.etAge);
>         etContribution = findViewById(R.id.etContribution);
>         spinnerCollege = findViewById(R.id.spinnerCollege);
>         radioGroupGender = findViewById(R.id.radioGroupGender);
>         btnSave = findViewById(R.id.btnSave);
>         btnViewReport = findViewById(R.id.btnViewReport);
>
>         // Setup spinner
>         ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
>                 R.array.colleges_array, android.R.layout.simple_spinner_item);
>         adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
>         spinnerCollege.setAdapter(adapter);
>     }
>
>     private void setupListeners() {
>         btnSave.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 saveCustomerToDatabase();
>             }
>         });
>
>         btnViewReport.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 viewContributionReport();
>             }
>         });
>     }
>
>     private void saveCustomerToDatabase() {
>         // Validate input
>         if (!validateInput()) {
>             return;
>         }
>
>         // Get data from input fields
>         String name = etName.getText().toString().trim();
>         String college = spinnerCollege.getSelectedItem().toString();
>         int age = Integer.parseInt(etAge.getText().toString().trim());
>
>         int selectedGenderId = radioGroupGender.getCheckedRadioButtonId();
>         RadioButton selectedGenderButton = findViewById(selectedGenderId);
>         String gender = selectedGenderButton.getText().toString();
>
>         double contribution = Double.parseDouble(etContribution.getText().toString().trim());
>
>         // Insert into database
>         long id = dbHelper.insertCustomer(name, college, age, gender, contribution);
>
>         if (id != -1) {
>             Toast.makeText(this, "Customer saved successfully with ID: " + id,
>                     Toast.LENGTH_SHORT).show();
>             clearFields();
>         } else {
>             Toast.makeText(this, "Failed to save customer", Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     private void viewContributionReport() {
>         String report = dbHelper.getContributionReport();
>
>         // Send report to ActivityTwo
>         Intent intent = new Intent(ActivityOne.this, ActivityTwo.class);
>         intent.putExtra("contribution_report", report);
>
>         // Also send list of customers
>         ArrayList<Customer> customerList = new ArrayList<>(dbHelper.getAllCustomers());
>         intent.putExtra("customer_list", customerList);
>
>         startActivity(intent);
>     }
>
>     private boolean validateInput() {
>         if (etName.getText().toString().trim().isEmpty()) {
>             etName.setError("Name is required");
>             etName.requestFocus();
>             return false;
>         }
>
>         if (etAge.getText().toString().trim().isEmpty()) {
>             etAge.setError("Age is required");
>             etAge.requestFocus();
>             return false;
>         }
>
>         if (etContribution.getText().toString().trim().isEmpty()) {
>             etContribution.setError("Monthly contribution is required");
>             etContribution.requestFocus();
>             return false;
>         }
>
>         if (radioGroupGender.getCheckedRadioButtonId() == -1) {
>             Toast.makeText(this, "Please select gender", Toast.LENGTH_SHORT).show();
>             return false;
>         }
>
>         return true;
>     }
>
>     private void clearFields() {
>         etName.setText("");
>         etAge.setText("");
>         etContribution.setText("");
>         spinnerCollege.setSelection(0);
>         radioGroupGender.clearCheck();
>         etName.requestFocus();
>     }
>
>     @Override
>     protected void onDestroy() {
>         if (dbHelper != null) {
>             dbHelper.close();
>         }
>         super.onDestroy();
>     }
> }
> ```
>
> ## 5. Usage Example in ActivityTwo (Receiving and Displaying Report)
> ```java
> public class ActivityTwo extends AppCompatActivity {
>     private TextView tvReport;
>     private ProgressBar progressBar;
>     private CalendarView calendarView;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_two);
>
>         tvReport = findViewById(R.id.tvReport);
>         progressBar = findViewById(R.id.progressBar);
>         calendarView = findViewById(R.id.calendarView);
>
>         // Receive and display report
>         Intent intent = getIntent();
>         if (intent.hasExtra("contribution_report")) {
>             String report = intent.getStringExtra("contribution_report");
>             tvReport.setText(report);
>         }
>
>         if (intent.hasExtra("customer_list")) {
>             ArrayList<Customer> customerList = (ArrayList<Customer>) intent.getSerializableExtra("customer_list");
>             displayCustomersOnCalendar(customerList);
>         }
>
>         setupCalendar();
>     }
>
>     private void displayCustomersOnCalendar(ArrayList<Customer> customerList) {
>         // Display summary on progress bar
>         double totalContributions = 0;
>         for (Customer customer : customerList) {
>             totalContributions += customer.getMonthlyContribution();
>         }
>
>         double maxTarget = 500000; // Example target
>         int progress = (int) ((totalContributions / maxTarget) * 100);
>         if (progress > 100) progress = 100;
>         progressBar.setProgress(progress);
>     }
>
>     private void setupCalendar() {
>         calendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
>             @Override
>             public void onSelectedDayChange(@NonNull CalendarView view,
>                                             int year, int month, int dayOfMonth) {
>                 String selectedDate = dayOfMonth + "/" + (month + 1) + "/" + year;
>                 checkForSACCOSEvent(selectedDate);
>             }
>         });
>     }
>
>     private void checkForSACCOSEvent(String date) {
>         HashMap<String, String> events = getSACCOSEvents();
>         if (events.containsKey(date)) {
>             Toast.makeText(this, "Event: " + events.get(date), Toast.LENGTH_LONG).show();
>         }
>     }
>
>     private HashMap<String, String> getSACCOSEvents() {
>         HashMap<String, String> events = new HashMap<>();
>         events.put("15/3/2024", "Annual General Meeting");
>         events.put("1/4/2024", "Monthly Contribution Deadline");
>         events.put("20/4/2024", "Board Meeting");
>         return events;
>     }
> }
> ```

---

### Question Six

The prime purpose of a content provider is to serve as a central repository of data where users can store and can fetch the data. The access of this repository is given to other applications also but in a safe manner in order to serve the different requirements of the user. Write an application that will allow users store their details such as name and phone numbers in a content provider. The application should also allow other applications to retrieve the stored user's information. The application has one activity called MainActivity, two edit texts for name and phone number and two buttons for save data and view data. The ids for the views are etName, etPhoneNumber, btnSave and btnView.

*(20 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Content Provider Application Implementation:**
>
> ## 1. UserContract.java - Contract Class
> ```java
> import android.net.Uri;
> import android.provider.BaseColumns;
>
> public class UserContract {
>
>     // Authority - must match provider authority in AndroidManifest.xml
>     public static final String AUTHORITY = "com.example.userprovider";
>
>     // Base content URI
>     public static final Uri BASE_CONTENT_URI = Uri.parse("content://" + AUTHORITY);
>
>     // Path for users table
>     public static final String PATH_USERS = "users";
>
>     // Inner class defining table contents
>     public static class UserEntry implements BaseColumns {
>         // Content URI for the users table
>         public static final Uri CONTENT_URI = Uri.withAppendedPath(BASE_CONTENT_URI, PATH_USERS);
>
>         // Table name
>         public static final String TABLE_NAME = "users";
>
>         // Column names
>         public static final String COLUMN_NAME = "name";
>         public static final String COLUMN_PHONE = "phone";
>         public static final String COLUMN_CREATED_AT = "created_at";
>
>         // MIME types
>         public static final String CONTENT_TYPE =
>                 "vnd.android.cursor.dir/vnd." + AUTHORITY + "." + PATH_USERS;
>         public static final String CONTENT_ITEM_TYPE =
>                 "vnd.android.cursor.item/vnd." + AUTHORITY + "." + PATH_USERS;
>     }
> }
> ```
>
> ## 2. UserDbHelper.java - Database Helper
> ```java
> import android.content.Context;
> import android.database.sqlite.SQLiteDatabase;
> import android.database.sqlite.SQLiteOpenHelper;
>
> public class UserDbHelper extends SQLiteOpenHelper {
>
>     private static final String DATABASE_NAME = "user.db";
>     private static final int DATABASE_VERSION = 1;
>
>     // SQL statement to create the users table
>     private static final String SQL_CREATE_ENTRIES =
>             "CREATE TABLE " + UserContract.UserEntry.TABLE_NAME + " (" +
>                     UserContract.UserEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
>                     UserContract.UserEntry.COLUMN_NAME + " TEXT NOT NULL, " +
>                     UserContract.UserEntry.COLUMN_PHONE + " TEXT NOT NULL, " +
>                     UserContract.UserEntry.COLUMN_CREATED_AT + " TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";
>
>     // SQL statement to drop the users table
>     private static final String SQL_DELETE_ENTRIES =
>             "DROP TABLE IF EXISTS " + UserContract.UserEntry.TABLE_NAME;
>
>     public UserDbHelper(Context context) {
>         super(context, DATABASE_NAME, null, DATABASE_VERSION);
>     }
>
>     @Override
>     public void onCreate(SQLiteDatabase db) {
>         db.execSQL(SQL_CREATE_ENTRIES);
>     }
>
>     @Override
>     public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         db.execSQL(SQL_DELETE_ENTRIES);
>         onCreate(db);
>     }
>
>     @Override
>     public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         onUpgrade(db, oldVersion, newVersion);
>     }
> }
> ```
>
> ## 3. UserProvider.java - Content Provider Implementation
> ```java
> import android.content.ContentProvider;
> import android.content.ContentUris;
> import android.content.ContentValues;
> import android.content.UriMatcher;
> import android.database.Cursor;
> import android.database.sqlite.SQLiteDatabase;
> import android.net.Uri;
> import android.text.TextUtils;
> import androidx.annotation.NonNull;
> import androidx.annotation.Nullable;
>
> public class UserProvider extends ContentProvider {
>
>     private UserDbHelper dbHelper;
>
>     // UriMatcher codes
>     private static final int USERS = 100;
>     private static final int USER_ID = 101;
>
>     // UriMatcher object
>     private static final UriMatcher uriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
>
>     static {
>         uriMatcher.addURI(UserContract.AUTHORITY, UserContract.PATH_USERS, USERS);
>         uriMatcher.addURI(UserContract.AUTHORITY, UserContract.PATH_USERS + "/#", USER_ID);
>     }
>
>     @Override
>     public boolean onCreate() {
>         dbHelper = new UserDbHelper(getContext());
>         return true;
>     }
>
>     @Nullable
>     @Override
>     public Cursor query(@NonNull Uri uri, @Nullable String[] projection,
>                         @Nullable String selection, @Nullable String[] selectionArgs,
>                         @Nullable String sortOrder) {
>         SQLiteDatabase db = dbHelper.getReadableDatabase();
>         Cursor cursor;
>
>         int match = uriMatcher.match(uri);
>         switch (match) {
>             case USERS:
>                 // Query all users
>                 cursor = db.query(
>                         UserContract.UserEntry.TABLE_NAME,
>                         projection,
>                         selection,
>                         selectionArgs,
>                         null,
>                         null,
>                         sortOrder != null ? sortOrder : UserContract.UserEntry.COLUMN_NAME + " ASC"
>                 );
>                 break;
>
>             case USER_ID:
>                 // Query a single user by ID
>                 String id = uri.getPathSegments().get(1);
>                 selection = UserContract.UserEntry._ID + "=?";
>                 selectionArgs = new String[]{id};
>                 cursor = db.query(
>                         UserContract.UserEntry.TABLE_NAME,
>                         projection,
>                         selection,
>                         selectionArgs,
>                         null,
>                         null,
>                         sortOrder
>                 );
>                 break;
>
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         // Set notification URI on the cursor
>         if (getContext() != null) {
>             cursor.setNotificationUri(getContext().getContentResolver(), uri);
>         }
>         return cursor;
>     }
>
>     @Nullable
>     @Override
>     public String getType(@NonNull Uri uri) {
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 return UserContract.UserEntry.CONTENT_TYPE;
>             case USER_ID:
>                 return UserContract.UserEntry.CONTENT_ITEM_TYPE;
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>     }
>
>     @Nullable
>     @Override
>     public Uri insert(@NonNull Uri uri, @Nullable ContentValues values) {
>         SQLiteDatabase db = dbHelper.getWritableDatabase();
>         long id;
>
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 id = db.insert(UserContract.UserEntry.TABLE_NAME, null, values);
>                 if (id > 0) {
>                     // Notify any observers that the data has changed
>                     Uri itemUri = ContentUris.withAppendedId(UserContract.UserEntry.CONTENT_URI, id);
>                     if (getContext() != null) {
>                         getContext().getContentResolver().notifyChange(itemUri, null);
>                     }
>                     return itemUri;
>                 }
>                 break;
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         return null;
>     }
>
>     @Override
>     public int delete(@NonNull Uri uri, @Nullable String selection,
>                       @Nullable String[] selectionArgs) {
>         SQLiteDatabase db = dbHelper.getWritableDatabase();
>         int deletedRows;
>
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 deletedRows = db.delete(UserContract.UserEntry.TABLE_NAME, selection, selectionArgs);
>                 break;
>
>             case USER_ID:
>                 String id = uri.getPathSegments().get(1);
>                 selection = UserContract.UserEntry._ID + "=?" +
>                         (!TextUtils.isEmpty(selection) ? " AND (" + selection + ")" : "");
>                 String[] args = TextUtils.isEmpty(selection) ?
>                         new String[]{id} : new String[]{id, selectionArgs != null ? selectionArgs[0] : ""};
>                 deletedRows = db.delete(UserContract.UserEntry.TABLE_NAME, selection, args);
>                 break;
>
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         if (deletedRows > 0 && getContext() != null) {
>             getContext().getContentResolver().notifyChange(uri, null);
>         }
>         return deletedRows;
>     }
>
>     @Override
>     public int update(@NonNull Uri uri, @Nullable ContentValues values,
>                       @Nullable String selection, @Nullable String[] selectionArgs) {
>         SQLiteDatabase db = dbHelper.getWritableDatabase();
>         int updatedRows;
>
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 updatedRows = db.update(UserContract.UserEntry.TABLE_NAME, values, selection, selectionArgs);
>                 break;
>
>             case USER_ID:
>                 String id = uri.getPathSegments().get(1);
>                 selection = UserContract.UserEntry._ID + "=?" +
>                         (!TextUtils.isEmpty(selection) ? " AND (" + selection + ")" : "");
>                 String[] args = TextUtils.isEmpty(selection) ?
>                         new String[]{id} : new String[]{id, selectionArgs != null ? selectionArgs[0] : ""};
>                 updatedRows = db.update(UserContract.UserEntry.TABLE_NAME, values, selection, args);
>                 break;
>
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         if (updatedRows > 0 && getContext() != null) {
>             getContext().getContentResolver().notifyChange(uri, null);
>         }
>         return updatedRows;
>     }
> }
> ```
>
> ## 4. activity_main.xml - Layout File
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="24dp"
>     android:background="#F5F5F5">
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="USER INFORMATION"
>         android:textSize="24sp"
>         android:textStyle="bold"
>         android:textColor="#2196F3"
>         android:gravity="center"
>         android:layout_marginBottom="32dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Enter User Details:"
>         android:textSize="16sp"
>         android:textColor="#333333"
>         android:layout_marginBottom="8dp"/>
>
>     <EditText
>         android:id="@+id/etName"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Full Name"
>         android:inputType="textPersonName"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginBottom="16dp"/>
>
>     <EditText
>         android:id="@+id/etPhoneNumber"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Phone Number"
>         android:inputType="phone"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginBottom="24dp"/>
>
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal">
>
>         <Button
>             android:id="@+id/btnSave"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginEnd="8dp"
>             android:text="SAVE DATA"
>             android:backgroundTint="#4CAF50"
>             android:textColor="#FFFFFF"
>             android:textSize="16sp"
>             android:padding="12dp"/>
>
>         <Button
>             android:id="@+id/btnView"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginStart="8dp"
>             android:text="VIEW DATA"
>             android:backgroundTint="#2196F3"
>             android:textColor="#FFFFFF"
>             android:textSize="16sp"
>             android:padding="12dp"/>
>     </LinearLayout>
>
>     <TextView
>         android:id="@+id/tvResult"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text=""
>         android:textSize="14sp"
>         android:textColor="#333333"
>         android:padding="16dp"
>         android:background="#FFFFFF"
>         android:layout_marginTop="24dp"
>         android:visibility="gone"/>
>
> </LinearLayout>
> ```
>
> ## 5. MainActivity.java
> ```java
> import android.content.ContentValues;
> import android.content.Intent;
> import android.database.Cursor;
> import android.net.Uri;
> import android.os.Bundle;
> import android.view.View;
> import android.widget.Button;
> import android.widget.EditText;
> import android.widget.TextView;
> android.widget.Toast;
> import androidx.appcompat.app.AlertDialog;
> import androidx.appcompat.app.AppCompatActivity;
>
> public class MainActivity extends AppCompatActivity {
>
>     private EditText etName, etPhoneNumber;
>     private Button btnSave, btnView;
>     private TextView tvResult;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         initializeViews();
>         setupClickListeners();
>     }
>
>     private void initializeViews() {
>         etName = findViewById(R.id.etName);
>         etPhoneNumber = findViewById(R.id.etPhoneNumber);
>         btnSave = findViewById(R.id.btnSave);
>         btnView = findViewById(R.id.btnView);
>         tvResult = findViewById(R.id.tvResult);
>     }
>
>     private void setupClickListeners() {
>         btnSave.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 saveUserData();
>             }
>         });
>
>         btnView.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 viewUserData();
>             }
>         });
>     }
>
>     /**
>      * Method to save user data using ContentProvider
>      */
>     private void saveUserData() {
>         String name = etName.getText().toString().trim();
>         String phone = etPhoneNumber.getText().toString().trim();
>
>         // Validate input
>         if (name.isEmpty()) {
>             etName.setError("Name is required");
>             etName.requestFocus();
>             return;
>         }
>
>         if (phone.isEmpty()) {
>             etPhoneNumber.setError("Phone number is required");
>             etPhoneNumber.requestFocus();
>             return;
>         }
>
>         if (phone.length() < 10) {
>             etPhoneNumber.setError("Enter a valid phone number (minimum 10 digits)");
>             etPhoneNumber.requestFocus();
>             return;
>         }
>
>         // Create ContentValues with user data
>         ContentValues values = new ContentValues();
>         values.put(UserContract.UserEntry.COLUMN_NAME, name);
>         values.put(UserContract.UserEntry.COLUMN_PHONE, phone);
>
>         try {
>             // Insert data using ContentProvider
>             Uri uri = UserContract.UserEntry.CONTENT_URI;
>             Uri newUri = getContentResolver().insert(uri, values);
>
>             if (newUri != null) {
>                 // Success
>                 Toast.makeText(this, "User data saved successfully!\nURI: " + newUri.toString(),
>                         Toast.LENGTH_LONG).show();
>
>                 // Clear input fields
>                 etName.setText("");
>                 etPhoneNumber.setText("");
>                 tvResult.setVisibility(View.GONE);
>
>                 // Show the ID of the inserted record
>                 String id = newUri.getPathSegments().get(1);
>                 Toast.makeText(this, "Record ID: " + id, Toast.LENGTH_SHORT).show();
>             } else {
>                 // Failed
>                 Toast.makeText(this, "Failed to save user data", Toast.LENGTH_SHORT).show();
>             }
>         } catch (Exception e) {
>             e.printStackTrace();
>             Toast.makeText(this, "Error: " + e.getMessage(), Toast.LENGTH_LONG).show();
>         }
>     }
>
>     /**
>      * Method to view all saved user data
>      */
>     private void viewUserData() {
>         try {
>             // Query all users from ContentProvider
>             Uri uri = UserContract.UserEntry.CONTENT_URI;
>             String[] projection = {
>                     UserContract.UserEntry._ID,
>                     UserContract.UserEntry.COLUMN_NAME,
>                     UserContract.UserEntry.COLUMN_PHONE,
>                     UserContract.UserEntry.COLUMN_CREATED_AT
>             };
>
>             Cursor cursor = getContentResolver().query(
>                     uri,
>                     projection,
>                     null,
>                     null,
>                     UserContract.UserEntry.COLUMN_NAME + " ASC"
>             );
>
>             if (cursor != null && cursor.getCount() > 0) {
>                 StringBuilder data = new StringBuilder();
>                 data.append("=== SAVED USERS ===\n\n");
>
>                 int count = 0;
>                 while (cursor.moveToNext()) {
>                     count++;
>                     int id = cursor.getInt(cursor.getColumnIndexOrThrow(UserContract.UserEntry._ID));
>                     String name = cursor.getString(cursor.getColumnIndexOrThrow(UserContract.UserEntry.COLUMN_NAME));
>                     String phone = cursor.getString(cursor.getColumnIndexOrThrow(UserContract.UserEntry.COLUMN_PHONE));
>                     String createdAt = cursor.getString(cursor.getColumnIndexOrThrow(UserContract.UserEntry.COLUMN_CREATED_AT));
>
>                     data.append(count).append(". ").append(name).append("\n");
>                     data.append("   ID: ").append(id).append("\n");
>                     data.append("   Phone: ").append(phone).append("\n");
>                     data.append("   Added: ").append(createdAt).append("\n\n");
>                 }
>
>                 cursor.close();
>
>                 // Display in TextView
>                 tvResult.setText(data.toString());
>                 tvResult.setVisibility(View.VISIBLE);
>
>                 // Show count
>                 Toast.makeText(this, "Found " + count + " user(s)", Toast.LENGTH_SHORT).show();
>
>                 // Also show in AlertDialog for better visibility
>                 showDataInDialog(data.toString());
>
>             } else {
>                 // No data found
>                 tvResult.setText("No users found in database");
>                 tvResult.setVisibility(View.VISIBLE);
>                 Toast.makeText(this, "No data found", Toast.LENGTH_SHORT).show();
>             }
>
>             if (cursor != null) {
>                 cursor.close();
>             }
>
>         } catch (Exception e) {
>             e.printStackTrace();
>             Toast.makeText(this, "Error: " + e.getMessage(), Toast.LENGTH_LONG).show();
>         }
>     }
>
>     /**
>      * Show data in AlertDialog
>      */
>     private void showDataInDialog(String data) {
>         new AlertDialog.Builder(this)
>                 .setTitle("User Data")
>                 .setMessage(data)
>                 .setPositiveButton("OK", null)
>                 .setNegativeButton("Share", new DialogInterface.OnClickListener() {
>                     @Override
>                     public void onClick(DialogInterface dialog, int which) {
>                         shareData(data);
>                     }
>                 })
>                 .setIcon(android.R.drawable.ic_dialog_info)
>                 .show();
>     }
>
>     /**
>      * Share data with other apps (demonstrates ContentProvider access by other apps)
>      */
>     private void shareData(String data) {
>         Intent shareIntent = new Intent(Intent.ACTION_SEND);
>         shareIntent.setType("text/plain");
>         shareIntent.putExtra(Intent.EXTRA_SUBJECT, "User Data from Content Provider");
>         shareIntent.putExtra(Intent.EXTRA_TEXT, data);
>         startActivity(Intent.createChooser(shareIntent, "Share via"));
>     }
>
>     /**
>      * Search for a specific user by name
>      */
>     private void searchUser(String searchName) {
>         Uri uri = UserContract.UserEntry.CONTENT_URI;
>         String selection = UserContract.UserEntry.COLUMN_NAME + " LIKE ?";
>         String[] selectionArgs = new String[]{"%" + searchName + "%"};
>
>         Cursor cursor = getContentResolver().query(
>                 uri,
>                 null,
>                 selection,
>                 selectionArgs,
>                 null
>         );
>
>         if (cursor != null && cursor.moveToFirst()) {
>             StringBuilder result = new StringBuilder("Search Results:\n\n");
>             do {
>                 String name = cursor.getString(cursor.getColumnIndexOrThrow(UserContract.UserEntry.COLUMN_NAME));
>                 String phone = cursor.getString(cursor.getColumnIndexOrThrow(UserContract.UserEntry.COLUMN_PHONE));
>                 result.append("• ").append(name).append(" - ").append(phone).append("\n");
>             } while (cursor.moveToNext());
>
>             cursor.close();
>             Toast.makeText(this, result.toString(), Toast.LENGTH_LONG).show();
>         }
>     }
>
>     /**
>      * Delete a user by ID
>      */
>     private void deleteUser(int userId) {
>         Uri uri = Uri.withAppendedPath(UserContract.UserEntry.CONTENT_URI, String.valueOf(userId));
>         int deletedRows = getContentResolver().delete(uri, null, null);
>
>         if (deletedRows > 0) {
>             Toast.makeText(this, "User deleted successfully", Toast.LENGTH_SHORT).show();
>             viewUserData(); // Refresh view
>         } else {
>             Toast.makeText(this, "Failed to delete user", Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     /**
>      * Update user phone number
>      */
>     private void updateUserPhone(int userId, String newPhone) {
>         ContentValues values = new ContentValues();
>         values.put(UserContract.UserEntry.COLUMN_PHONE, newPhone);
>
>         Uri uri = Uri.withAppendedPath(UserContract.UserEntry.CONTENT_URI, String.valueOf(userId));
>         int updatedRows = getContentResolver().update(uri, values, null, null);
>
>         if (updatedRows > 0) {
>             Toast.makeText(this, "Phone number updated", Toast.LENGTH_SHORT).show();
>         }
>     }
> }
> ```
>
> ## 6. AndroidManifest.xml
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <manifest xmlns:android="http://schemas.android.com/apk/res/android"
>     package="com.example.userprovider">
>
>     <application
>         android:allowBackup="true"
>         android:icon="@mipmap/ic_launcher"
>         android:label="User Provider App"
>         android:theme="@style/AppTheme">
>
>         <activity
>             android:name=".MainActivity"
>             android:exported="true">
>             <intent-filter>
>                 <action android:name="android.intent.action.MAIN" />
>                 <category android:name="android.intent.category.LAUNCHER" />
>             </intent-filter>
>         </activity>
>
>         <!-- Content Provider Declaration -->
>         <provider
>             android:name=".UserProvider"
>             android:authorities="com.example.userprovider"
>             android:exported="true"
>             android:enabled="true"
>             android:permission="android.permission.READ_USER_DICTIONARY">
>             <!-- Optional: Add permissions for security -->
>         </provider>
>
>     </application>
>
>     <!-- Optional permissions for other apps to access -->
>     <permission
>         android:name="com.example.userprovider.READ_USER"
>         android:protectionLevel="normal" />
>     <permission
>         android:name="com.example.userprovider.WRITE_USER"
>         android:protectionLevel="normal" />
>
> </manifest>
> ```
>
> ## 7. Example of Another App Accessing the Content Provider
> ```java
> // This could be in a separate application that accesses the content provider
> public class OtherAppActivity extends AppCompatActivity {
>
>     private void accessUserDataFromProvider() {
>         // Content provider URI from the first app
>         Uri uri = Uri.parse("content://com.example.userprovider/users");
>
>         // Query data
>         Cursor cursor = getContentResolver().query(
>                 uri,
>                 null,
>                 null,
>                 null,
>                 null
>         );
>
>         if (cursor != null && cursor.moveToFirst()) {
>             StringBuilder data = new StringBuilder();
>             do {
>                 String name = cursor.getString(cursor.getColumnIndex("name"));
>                 String phone = cursor.getString(cursor.getColumnIndex("phone"));
>                 data.append(name).append(": ").append(phone).append("\n");
>             } while (cursor.moveToNext());
>
>             cursor.close();
>
>             // Display the data from other app's content provider
>             Toast.makeText(this, "Data from provider:\n" + data.toString(),
>                     Toast.LENGTH_LONG).show();
>         }
>     }
> }
> ```

---

### Question Seven

Android Fragment represents a behavior or a portion of a user interface in an activity. Multiple fragments can be combined in a single activity to build a multi- panel User Interface (UI) and reuse a fragment in multiple activities. As a mobile apps developer, you have been asked to develop an application with two fragments named FragmentOne and FragmentTwo. When a user click on the specific fragment, the description of the fragment displays on the fragment container in the main activity which hosts the fragments. Assume the ids for FragmentOne and FragmentTwo are btnFragment_one and btnFragment_two respectively. Hint: use linear layout to create a fragment container.

*(20 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Fragment Implementation:**
>
> ## 1. activity_main.xml - Main Activity Layout
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:background="#F5F5F5">
>
>     <!-- Header -->
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="vertical"
>         android:padding="16dp"
>         android:background="#2196F3">
>
>         <TextView
>             android:layout_width="match_parent"
>             android:layout_height="wrap_content"
>             android:text="FRAGMENT DEMONSTRATION"
>             android:textSize="24sp"
>             android:textStyle="bold"
>             android:textColor="#FFFFFF"
>             android:gravity="center"/>
>
>         <TextView
>             android:layout_width="match_parent"
>             android:layout_height="wrap_content"
>             android:text="Click buttons below to display fragments"
>             android:textSize="14sp"
>             android:textColor="#E0E0E0"
>             android:gravity="center"
>             android:layout_marginTop="4dp"/>
>     </LinearLayout>
>
>     <!-- Button Layout for Fragment Selection -->
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal"
>         android:padding="16dp"
>         android:background="#FFFFFF"
>         android:elevation="4dp">
>
>         <Button
>             android:id="@+id/btnFragment_one"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginEnd="8dp"
>             android:text="FRAGMENT ONE"
>             android:backgroundTint="#6200EE"
>             android:textColor="#FFFFFF"
>             android:textStyle="bold"
>             android:padding="12dp"/>
>
>         <Button
>             android:id="@+id/btnFragment_two"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginStart="8dp"
>             android:text="FRAGMENT TWO"
>             android:backgroundTint="#03DAC5"
>             android:textColor="#FFFFFF"
>             android:textStyle="bold"
>             android:padding="12dp"/>
>     </LinearLayout>
>
>     <!-- Status Bar -->
>     <TextView
>         android:id="@+id/tvStatus"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="No fragment selected"
>         android:textSize="14sp"
>         android:textColor="#757575"
>         android:padding="12dp"
>         android:background="#EEEEEE"
>         android:gravity="center"/>
>
>     <!-- Fragment Container -->
>     <FrameLayout
>         android:id="@+id/fragment_container"
>         android:layout_width="match_parent"
>         android:layout_height="0dp"
>         android:layout_weight="1"
>         android:background="#FFFFFF"
>         android:padding="16dp"/>
>
> </LinearLayout>
> ```
>
> ## 2. fragment_one.xml - Layout for FragmentOne
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp"
>     android:background="#F3E5F5">
>
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal"
>         android:gravity="center_vertical"
>         android:layout_marginBottom="16dp">
>
>         <ImageView
>             android:layout_width="48dp"
>             android:layout_height="48dp"
>             android:src="@android:drawable/ic_dialog_info"
>             android:contentDescription="Info Icon"
>             android:layout_marginEnd="12dp"/>
>
>         <TextView
>             android:layout_width="wrap_content"
>             android:layout_height="wrap_content"
>             android:text="FRAGMENT ONE"
>             android:textSize="28sp"
>             android:textColor="#6200EE"
>             android:textStyle="bold"/>
>     </LinearLayout>
>
>     <View
>         android:layout_width="match_parent"
>         android:layout_height="2dp"
>         android:background="#6200EE"
>         android:layout_marginBottom="16dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="This is Fragment One description."
>         android:textSize="20sp"
>         android:textColor="#333333"
>         android:textStyle="bold"
>         android:layout_marginBottom="12dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Fragment One represents the first portion of the user interface. It contains specific functionality and UI elements that are part of the main activity. Clicking on Fragment One button displays this description in the fragment container."
>         android:textSize="16sp"
>         android:textColor="#555555"
>         android:lineSpacingExtra="4dp"
>         android:padding="16dp"
>         android:background="#FFFFFF"
>         android:elevation="2dp"
>         android:layout_marginBottom="16dp"/>
>
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal"
>         android:gravity="center"
>         android:layout_marginTop="16dp">
>
>         <TextView
>             android:layout_width="wrap_content"
>             android:layout_height="wrap_content"
>             android:text="Features:"
>             android:textSize="16sp"
>             android:textStyle="bold"
>             android:textColor="#6200EE"
>             android:layout_marginEnd="8dp"/>
>
>         <TextView
>             android:layout_width="wrap_content"
>             android:layout_height="wrap_content"
>             android:text="UI Component, Reusable, Modular"
>             android:textSize="14sp"
>             android:textColor="#757575"/>
>     </LinearLayout>
>
> </LinearLayout>
> ```
>
> ## 3. fragment_two.xml - Layout for FragmentTwo
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp"
>     android:background="#E0F2F1">
>
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal"
>         android:gravity="center_vertical"
>         android:layout_marginBottom="16dp">
>
>         <ImageView
>             android:layout_width="48dp"
>             android:layout_height="48dp"
>             android:src="@android:drawable/ic_dialog_map"
>             android:contentDescription="Map Icon"
>             android:layout_marginEnd="12dp"/>
>
>         <TextView
>             android:layout_width="wrap_content"
>             android:layout_height="wrap_content"
>             android:text="FRAGMENT TWO"
>             android:textSize="28sp"
>             android:textColor="#03DAC5"
>             android:textStyle="bold"/>
>     </LinearLayout>
>
>     <View
>         android:layout_width="match_parent"
>         android:layout_height="2dp"
>         android:background="#03DAC5"
>         android:layout_marginBottom="16dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="This is Fragment Two description."
>         android:textSize="20sp"
>         android:textColor="#333333"
>         android:textStyle="bold"
>         android:layout_marginBottom="12dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Fragment Two represents the second portion of the user interface. It contains different functionality and UI elements. Multiple fragments can be combined in a single activity to build multi-panel UIs and fragments can be reused in multiple activities."
>         android:textSize="16sp"
>         android:textColor="#555555"
>         android:lineSpacingExtra="4dp"
>         android:padding="16dp"
>         android:background="#FFFFFF"
>         android:elevation="2dp"
>         android:layout_marginBottom="16dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Benefits of Fragments:"
>         android:textSize="16sp"
>         android:textStyle="bold"
>         android:textColor="#03DAC5"
>         android:layout_marginTop="8dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="✓ Modularity\n✓ Reusability\n✓ Multi-panel layouts\n✓ Back stack management\n✓ Adaptability to different screen sizes"
>         android:textSize="14sp"
>         android:textColor="#555555"
>         android:lineSpacingExtra="4dp"
>         android:padding="12dp"
>         android:background="#FFFFFF"
>         android:elevation="1dp"/>
>
> </LinearLayout>
> ```
>
> ## 4. FragmentOne.java - First Fragment Class
> ```java
> import android.os.Bundle;
> import android.view.LayoutInflater;
> import android.view.View;
> import android.view.ViewGroup;
> import androidx.fragment.app.Fragment;
>
> public class FragmentOne extends Fragment {
>
>     @Override
>     public View onCreateView(LayoutInflater inflater, ViewGroup container,
>                              Bundle savedInstanceState) {
>         // Inflate the layout for this fragment
>         return inflater.inflate(R.layout.fragment_one, container, false);
>     }
>
>     @Override
>     public void onViewCreated(View view, Bundle savedInstanceState) {
>         super.onViewCreated(view, savedInstanceState);
>
>         // Additional initialization after view is created
>         // You can set click listeners, adapters, etc. here
>     }
>
>     // Method to update fragment content with arguments
>     public static FragmentOne newInstance(String param) {
>         FragmentOne fragment = new FragmentOne();
>         Bundle args = new Bundle();
>         args.putString("param", param);
>         fragment.setArguments(args);
>         return fragment;
>     }
> }
> ```
>
> ## 5. FragmentTwo.java - Second Fragment Class
> ```java
> import android.os.Bundle;
> import android.view.LayoutInflater;
> import android.view.View;
> import android.view.ViewGroup;
> import androidx.fragment.app.Fragment;
>
> public class FragmentTwo extends Fragment {
>
>     @Override
>     public View onCreateView(LayoutInflater inflater, ViewGroup container,
>                              Bundle savedInstanceState) {
>         // Inflate the layout for this fragment
>         return inflater.inflate(R.layout.fragment_two, container, false);
>     }
>
>     @Override
>     public void onViewCreated(View view, Bundle savedInstanceState) {
>         super.onViewCreated(view, savedInstanceState);
>
>         // Additional initialization after view is created
>         // You can set click listeners, adapters, etc. here
>     }
>
>     // Method to update fragment content with arguments
>     public static FragmentTwo newInstance(String param) {
>         FragmentTwo fragment = new FragmentTwo();
>         Bundle args = new Bundle();
>         args.putString("param", param);
>         fragment.setArguments(args);
>         return fragment;
>     }
> }
> ```
>
> ## 6. MainActivity.java - Host Activity
> ```java
> import android.os.Bundle;
> import android.view.View;
> import android.widget.Button;
> import android.widget.TextView;
> import android.widget.Toast;
> import androidx.appcompat.app.AppCompatActivity;
> import androidx.fragment.app.Fragment;
> import androidx.fragment.app.FragmentManager;
> import androidx.fragment.app.FragmentTransaction;
>
> public class MainActivity extends AppCompatActivity {
>
>     private Button btnFragmentOne, btnFragmentTwo;
>     private TextView tvStatus;
>     private FragmentManager fragmentManager;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         initializeViews();
>         setupFragmentManager();
>         setupClickListeners();
>
>         // Load default fragment (optional)
>         if (savedInstanceState == null) {
>             loadFragment(new FragmentOne(), "Fragment One");
>         }
>     }
>
>     private void initializeViews() {
>         btnFragmentOne = findViewById(R.id.btnFragment_one);
>         btnFragmentTwo = findViewById(R.id.btnFragment_two);
>         tvStatus = findViewById(R.id.tvStatus);
>     }
>
>     private void setupFragmentManager() {
>         fragmentManager = getSupportFragmentManager();
>
>         // Add back stack change listener
>         fragmentManager.addOnBackStackChangedListener(new FragmentManager.OnBackStackChangedListener() {
>             @Override
>             public void onBackStackChanged() {
>                 updateStatusFromBackStack();
>             }
>         });
>     }
>
>     private void setupClickListeners() {
>         btnFragmentOne.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 loadFragment(new FragmentOne(), "Fragment One");
>                 showToast("Loading Fragment One");
>             }
>         });
>
>         btnFragmentTwo.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 loadFragment(new FragmentTwo(), "Fragment Two");
>                 showToast("Loading Fragment Two");
>             }
>         });
>     }
>
>     /**
>      * Method to load fragment into container
>      */
>     private void loadFragment(Fragment fragment, String fragmentName) {
>         // Begin fragment transaction
>         FragmentTransaction transaction = fragmentManager.beginTransaction();
>
>         // Add custom animations
>         transaction.setCustomAnimations(
>                 android.R.anim.fade_in,    // enter
>                 android.R.anim.fade_out,   // exit
>                 android.R.anim.slide_in_left, // popEnter
>                 android.R.anim.slide_out_right // popExit
>         );
>
>         // Replace the fragment in the container
>         transaction.replace(R.id.fragment_container, fragment);
>
>         // Add to back stack (allows back navigation)
>         transaction.addToBackStack(fragmentName);
>
>         // Commit the transaction
>         transaction.commit();
>
>         // Update status
>         tvStatus.setText("Currently viewing: " + fragmentName);
>     }
>
>     /**
>      * Update status based on back stack
>      */
>     private void updateStatusFromBackStack() {
>         int backStackCount = fragmentManager.getBackStackEntryCount();
>         if (backStackCount > 0) {
>             FragmentManager.BackStackEntry entry = fragmentManager.getBackStackEntryAt(backStackCount - 1);
>             tvStatus.setText("Currently viewing: " + entry.getName());
>         } else {
>             tvStatus.setText("No fragment selected");
>         }
>     }
>
>     /**
>      * Method to load fragment with data
>      */
>     private void loadFragmentWithData(Fragment fragment, String fragmentName, Bundle data) {
>         fragment.setArguments(data);
>         loadFragment(fragment, fragmentName);
>     }
>
>     /**
>      * Method to clear back stack
>      */
>     private void clearBackStack() {
>         fragmentManager.popBackStack(null, FragmentManager.POP_BACK_STACK_INCLUSIVE);
>         tvStatus.setText("Back stack cleared");
>     }
>
>     /**
>      * Show toast message
>      */
>     private void showToast(String message) {
>         Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
>     }
>
>     /**
>      * Handle back button to navigate through fragments
>      */
>     @Override
>     public void onBackPressed() {
>         if (fragmentManager.getBackStackEntryCount() > 1) {
>             fragmentManager.popBackStack();
>         } else {
>             super.onBackPressed();
>         }
>     }
>
>     /**
>      * Method to get current fragment
>      */
>     private Fragment getCurrentFragment() {
>         return fragmentManager.findFragmentById(R.id.fragment_container);
>     }
>
>     /**
>      * Method to communicate between fragments (example)
>      */
>     private void communicateBetweenFragments(String message) {
>         Fragment currentFragment = getCurrentFragment();
>         if (currentFragment instanceof FragmentOne) {
>             // Send message to FragmentOne
>             Bundle result = new Bundle();
>             result.putString("message", message);
>             getSupportFragmentManager().setFragmentResult("requestKey", result);
>         }
>     }
> }
> ```
>
> ## 7. Alternative Approach with Interface Communication (Bonus)
> ```java
> // Interface for fragment communication
> public interface OnFragmentInteractionListener {
>     void onFragmentInteraction(String fragmentName, String message);
> }
>
> // Modified FragmentOne with interface
> public class FragmentOne extends Fragment {
>     private OnFragmentInteractionListener listener;
>
>     @Override
>     public void onAttach(Context context) {
>         super.onAttach(context);
>         if (context instanceof OnFragmentInteractionListener) {
>             listener = (OnFragmentInteractionListener) context;
>         }
>     }
>
>     @Override
>     public void onViewCreated(View view, Bundle savedInstanceState) {
>         super.onViewCreated(view, savedInstanceState);
>
>         // Example button in fragment
>         Button btnAction = view.findViewById(R.id.btnFragmentAction);
>         btnAction.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 if (listener != null) {
>                     listener.onFragmentInteraction("FragmentOne", "Button clicked in Fragment One");
>                 }
>             }
>         });
>     }
>
>     @Override
>     public void onDetach() {
>         super.onDetach();
>         listener = null;
>     }
> }
>
> // MainActivity implementing the interface
> public class MainActivity extends AppCompatActivity implements OnFragmentInteractionListener {
>
>     @Override
>     public void onFragmentInteraction(String fragmentName, String message) {
>         // Handle communication from fragments
>         Toast.makeText(this, fragmentName + ": " + message, Toast.LENGTH_SHORT).show();
>         tvStatus.setText("Interaction: " + message);
>     }
> }
> ```
>
> ## Key Features Implemented:
>
> 1. **Two Fragments**: FragmentOne and FragmentTwo with distinct layouts
> 2. **Fragment Container**: FrameLayout in LinearLayout to host fragments
> 3. **Fragment Transactions**: Using FragmentManager to replace fragments
> 4. **Click Handling**: Buttons trigger fragment loading
> 5. **Animations**: Custom fade and slide animations for transitions
> 6. **Back Stack Management**: Allows back navigation between fragments
> 7. **Status Display**: Shows which fragment is currently displayed
> 8. **Communication Options**: Interface-based and Bundle-based communication
> 9. **Toast Notifications**: User feedback on actions
> 10. **Reusable Design**: Fragments can be reused in other activities

---

## END OF EXAMINATION PAPER