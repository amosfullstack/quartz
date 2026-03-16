


# THE UNIVERSITY OF DODOMA

## OFFICE OF THE DEPUTY VICE CHANCELLOR ACADEMIC, RESEARCH AND CONSULTANCY

# COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION

## Department of Computer Science and Engineering

### End of Semester One (1) University Examination for the 2021/2022 Academic Year

**Course Name:** Mobile Applications Development

**Paper Code Number:** CP 313

**Date of Examination:** 23rd February, 2022

**Time:** 11:45 - 14:45

**Duration:** 3 Hours

**Venue(s):** LRB 105, LRB 106, LRB 003D

**Sitting Programme(s):** BSc.CS3, SE3, HIS3, IS3, BIS3, IDIT3

---

## SECTION A: (15 MARKS)

**1. Answer the following questions:**


**a. With example, explain the difference between Implicit and Explicit Intent.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Explicit Intent**: Specifies the exact component (activity, service, etc.) to start by name. Used within the same application.
>
> *Example:*
> ```java
> // Explicit Intent - directly specifies target activity
> Intent intent = new Intent(MainActivity.this, SecondActivity.class);
> startActivity(intent);
> ```
>
> **Implicit Intent**: Declares an action to perform and lets another app handle it. Android system finds appropriate component that can handle the intent.
>
> *Example:*
> ```java
> // Implicit Intent - system finds app to handle ACTION_VIEW
> Intent intent = new Intent(Intent.ACTION_VIEW, 
>                            Uri.parse("https://www.google.com"));
> startActivity(intent);
> ```

---

**b. Define a Splash Screen.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> A **Splash Screen** is a startup screen that appears while the application is loading. It displays a logo, brand name, or visual element to provide immediate feedback to users that the app is launching, improving user experience during initialization time before the main UI becomes visible.

---

**c. Name the two permissions you need to declare in your AndroidManifest.xml file for sending and receiving SMS messages.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> 1. `android.permission.SEND_SMS`
> 2. `android.permission.RECEIVE_SMS`

---

**d. What is the difference between the onPause() method and the onSaveInstanceState() method?**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **onPause()** is called when the activity is partially visible and going into the background, used to pause operations like video playback or release system resources.
>
> **onSaveInstanceState()** is called to save UI state data before the activity might be destroyed, storing temporary data in a Bundle to restore when the activity recreates after configuration changes.

---

**2. Provide a brief description of the following android project resources:**
*(1 Mark Each)*

**a. res/mipmap**

> [!Tip]- Answer (Click to show)
> The **res/mipmap** folder stores launcher icon files at different densities (mdpi, hdpi, xhdpi, etc.). These icons appear on the device's home screen and in the app drawer. Mipmap folders ensure launcher icons scale properly across different devices.

---

**b. Gradle**

> [!Tip]- Answer (Click to show)
> **Gradle** is an automated build system used in Android Studio. It manages project dependencies, compiles resources, runs tests, and packages the application into APK files. The build.gradle files contain configuration for build types, dependencies, SDK versions, and signing configurations.

---

**c. res/drawable**

> [!Tip]- Answer (Click to show)
> The **res/drawable** folder contains image resources (PNG, JPG, GIF) and XML drawable files used in the application. This includes button backgrounds, shapes, selectors, and vector assets that define graphics displayed in the user interface.

---

**d. Menu**

> [!Tip]- Answer (Click to show)
> **Menu** refers to XML files in the res/menu folder that define menu items for options menus, context menus, and action bar items. These files specify item IDs, titles, icons, and show/hide conditions for menu elements in the application.

---

**e. Manifests/**

> [!Tip]- Answer (Click to show)
> The **Manifests/** folder contains the AndroidManifest.xml file, which is the essential configuration file for every Android app. It declares app components (activities, services, receivers), required permissions, hardware/software features, and minimum API level requirements.

---

**3. With examples, briefly provide the explanation of the following features:**
*(1 Mark Each)*

**a. String.xml**

> [!Tip]- Answer (Click to show)
> **String.xml** is a resource file in res/values/ that stores all text strings used in the application. It enables localization and centralizes text management.
>
> *Example:*
> ```xml
> <resources>
>     <string name="app_name">My Application</string>
>     <string name="welcome_message">Welcome to the app!</string>
> </resources>
> ```

---

**b. Colors.xml**

> [!Tip]- Answer (Click to show)
> **Colors.xml** is a resource file in res/values/ that defines color constants used throughout the application for consistent theming.
>
> *Example:*
> ```xml
> <resources>
>     <color name="primaryColor">#6200EE</color>
>     <color name="secondaryColor">#03DAC5</color>
>     <color name="textColor">#FFFFFF</color>
> </resources>
> ```

---

**c. Android Virtual Device (AVD)**

> [!Tip]- Answer (Click to show)
> **Android Virtual Device (AVD)** is an emulator configuration that simulates physical Android devices for testing applications. It defines device specifications like screen size, resolution, API level, and hardware features.
>
> *Example:* Pixel 4 AVD with API 30, running Android 11, with 2GB RAM and 200MB internal storage.

---

**d. TOAST**

> [!Tip]- Answer (Click to show)
> **Toast** is a popup message that appears briefly on the screen and automatically fades away without user interaction. It provides simple feedback without interrupting the current activity.
>
> *Example:*
> ```java
> Toast.makeText(getApplicationContext(), 
>                "Data saved successfully!", 
>                Toast.LENGTH_SHORT).show();
> ```

---

**e. View**

> [!Tip]- Answer (Click to show)
> **View** is the basic building block for UI components in Android. It occupies a rectangular area on the screen and handles drawing and event handling. All UI widgets (Button, TextView, EditText) are subclasses of View.
>
> *Example:* Button, TextView, ImageView are all types of Views.

---

## SECTION B: (45 MARKS)

**Attempt THREE (3) out of FOUR (4) questions in this section.**

---

### QUESTION 4

You have been asked by the management of Dodoma Secondary School to develop a mobile application that will store the information of the students. The app should store name, region, age, gender and subjects of the student. The management want to show the reports of how the student performs his/her subjects (English, Mathematics, Physics, Chemistry and Biology). The management also wants to show the dates of different events within the school. The management suggests the following features to be used: radio button for gender, spinner for region, and checkboxes for subjects. Use progress bar to show the performance of the students and calendar to show the dates of the events. Based on the given requirements, you found that the application has only two activities i.e. ActivityOne and ActivityTwo.

---

**a. Using the methods of Intent class show how you will send the student's data to the second activity.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Sending student data from ActivityOne to ActivityTwo using Intent:**
>
> ```java
> // In ActivityOne.java
>
> // Get data from UI components
> String studentName = editTextName.getText().toString();
> String studentRegion = spinnerRegion.getSelectedItem().toString();
> int studentAge = Integer.parseInt(editTextAge.getText().toString());
>
> // Get gender from radio button
> String studentGender = radioGroupGender.getCheckedRadioButtonId() == R.id.rbMale ? "Male" : "Female";
>
> // Get selected subjects from checkboxes
> ArrayList<String> selectedSubjects = new ArrayList<>();
> if (cbEnglish.isChecked()) selectedSubjects.add("English");
> if (cbMath.isChecked()) selectedSubjects.add("Mathematics");
> if (cbPhysics.isChecked()) selectedSubjects.add("Physics");
> if (cbChemistry.isChecked()) selectedSubjects.add("Chemistry");
> if (cbBiology.isChecked()) selectedSubjects.add("Biology");
>
> // Create Intent
> Intent intent = new Intent(ActivityOne.this, ActivityTwo.class);
>
> // Send data using putExtra methods
> intent.putExtra("KEY_NAME", studentName);
> intent.putExtra("KEY_REGION", studentRegion);
> intent.putExtra("KEY_AGE", studentAge);
> intent.putExtra("KEY_GENDER", studentGender);
> intent.putStringArrayListExtra("KEY_SUBJECTS", selectedSubjects);
>
> // Start the second activity
> startActivity(intent);
> ```

---

**b. Using the methods of Intent class show how you will receive the student's data within the second activity.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Receiving student data in ActivityTwo:**
>
> ```java
> // In ActivityTwo.java - onCreate() method
>
> // Get the intent that started this activity
> Intent receivedIntent = getIntent();
>
> // Retrieve data using appropriate get methods
> String studentName = receivedIntent.getStringExtra("KEY_NAME");
> String studentRegion = receivedIntent.getStringExtra("KEY_REGION");
> int studentAge = receivedIntent.getIntExtra("KEY_AGE", 0);
> String studentGender = receivedIntent.getStringExtra("KEY_GENDER");
>
> // Retrieve ArrayList of subjects
> ArrayList<String> selectedSubjects = receivedIntent.getStringArrayListExtra("KEY_SUBJECTS");
>
> // Display the received data
> textViewName.setText("Name: " + studentName);
> textViewRegion.setText("Region: " + studentRegion);
> textViewAge.setText("Age: " + studentAge);
> textViewGender.setText("Gender: " + studentGender);
>
> // Display subjects
> StringBuilder subjectsText = new StringBuilder("Subjects: ");
> for (String subject : selectedSubjects) {
>     subjectsText.append(subject).append(", ");
> }
> textViewSubjects.setText(subjectsText.toString());
> ```

---

**c. By the help of SQLiteOpenHelper class, show how you can save the student's details in a database. Use user and student as the name of the database and table respectively.**
*(9 Marks)*

> [!Tip]- Answer (Click to show)
> **SQLiteOpenHelper implementation for student database:**
>
> ```java
> // DatabaseHelper.java
> import android.content.ContentValues;
> import android.content.Context;
> import android.database.sqlite.SQLiteDatabase;
> import android.database.sqlite.SQLiteOpenHelper;
>
> public class DatabaseHelper extends SQLiteOpenHelper {
>
>     // Database and table names
>     private static final String DATABASE_NAME = "user.db";  // Database name
>     private static final String TABLE_NAME = "student";      // Table name
>     private static final int DATABASE_VERSION = 1;
>
>     // Column names
>     private static final String COL_ID = "id";
>     private static final String COL_NAME = "name";
>     private static final String COL_REGION = "region";
>     private static final String COL_AGE = "age";
>     private static final String COL_GENDER = "gender";
>     private static final String COL_SUBJECTS = "subjects";
>
>     // Create table SQL query
>     private static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + "("
>             + COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, "
>             + COL_NAME + " TEXT, "
>             + COL_REGION + " TEXT, "
>             + COL_AGE + " INTEGER, "
>             + COL_GENDER + " TEXT, "
>             + COL_SUBJECTS + " TEXT)";
>
>     // Constructor
>     public DatabaseHelper(Context context) {
>         super(context, DATABASE_NAME, null, DATABASE_VERSION);
>     }
>
>     @Override
>     public void onCreate(SQLiteDatabase db) {
>         // Create the student table when database is created
>         db.execSQL(CREATE_TABLE);
>     }
>
>     @Override
>     public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         // Drop older table if exists and create new
>         db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
>         onCreate(db);
>     }
>
>     // Method to insert student data
>     public long insertStudent(String name, String region, int age, 
>                               String gender, String subjects) {
>         // Get writable database
>         SQLiteDatabase db = this.getWritableDatabase();
>
>         // Create ContentValues object to hold data
>         ContentValues contentValues = new ContentValues();
>         contentValues.put(COL_NAME, name);
>         contentValues.put(COL_REGION, region);
>         contentValues.put(COL_AGE, age);
>         contentValues.put(COL_GENDER, gender);
>         contentValues.put(COL_SUBJECTS, subjects);
>
>         // Insert row and return the row ID
>         long id = db.insert(TABLE_NAME, null, contentValues);
>         db.close();  // Close database connection
>         return id;   // Return inserted row ID
>     }
>
>     // Method to save all student details
>     public long saveStudentDetails(String name, String region, int age, 
>                                    String gender, ArrayList<String> subjects) {
>         // Convert subjects ArrayList to comma-separated string
>         StringBuilder subjectsStr = new StringBuilder();
>         for (String subject : subjects) {
>             subjectsStr.append(subject).append(",");
>         }
>
>         // Insert into database and return result
>         return insertStudent(name, region, age, gender, subjectsStr.toString());
>     }
> }
> ```
>
> **Usage in ActivityOne or ActivityTwo:**
> ```java
> // Create instance of DatabaseHelper
> DatabaseHelper dbHelper = new DatabaseHelper(this);
>
> // Save student data
> long result = dbHelper.saveStudentDetails(
>     "John Doe", 
>     "Dar es Salaam", 
>     16, 
>     "Male", 
>     selectedSubjects
> );
>
> // Check if save was successful
> if (result != -1) {
>     Toast.makeText(this, "Student saved with ID: " + result, Toast.LENGTH_SHORT).show();
> } else {
>     Toast.makeText(this, "Failed to save student", Toast.LENGTH_SHORT).show();
> }
> ```

---

### QUESTION 5

The prime purpose of a content provider is to serve as a central repository of data where users can store and can fetch the data. The access of this repository is given to other applications also but in a safe manner in order to serve the different requirements of the user. Write an application that will allow users store their details such as name and phone numbers in a content provider. The application should also allow other applications to retrieve the stored user's information. The application has one activity called MainActivity, two edit texts for name and phone number and two buttons for save data and view data. The ids for the views are etName, etPhoneNumber, btnSave and btnView.

*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Content Provider Application Implementation:**
>
> **1. UserContract.java - Contract Class**
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
>     }
> }
> ```
>
> **2. UserDbHelper.java - Database Helper**
> ```java
> import android.content.Context;
> import android.database.sqlite.SQLiteDatabase;
> import android.database.sqlite.SQLiteOpenHelper;
>
> public class UserDbHelper extends SQLiteOpenHelper {
>
>     private static final String DATABASE_NAME = "user.db";  // Database name
>     private static final int DATABASE_VERSION = 1;
>
>     // SQL statement to create the users table
>     private static final String SQL_CREATE_ENTRIES =
>             "CREATE TABLE " + UserContract.UserEntry.TABLE_NAME + " (" +
>                     UserContract.UserEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
>                     UserContract.UserEntry.COLUMN_NAME + " TEXT NOT NULL, " +
>                     UserContract.UserEntry.COLUMN_PHONE + " TEXT NOT NULL)";
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
>         db.execSQL(SQL_CREATE_ENTRIES);  // Create table
>     }
>
>     @Override
>     public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         db.execSQL(SQL_DELETE_ENTRIES);  // Drop old table
>         onCreate(db);                     // Create new table
>     }
> }
> ```
>
> **3. UserProvider.java - Content Provider**
> ```java
> import android.content.ContentProvider;
> import android.content.ContentUris;
> import android.content.ContentValues;
> import android.content.UriMatcher;
> import android.database.Cursor;
> import android.database.sqlite.SQLiteDatabase;
> import android.net.Uri;
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
>     // UriMatcher object to match URIs
>     private static final UriMatcher uriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
>
>     static {
>         // Add URI patterns
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
>                         sortOrder
>                 );
>                 break;
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
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         // Set notification URI on the cursor
>         cursor.setNotificationUri(getContext().getContentResolver(), uri);
>         return cursor;
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
>                 // Insert new user
>                 id = db.insert(UserContract.UserEntry.TABLE_NAME, null, values);
>                 if (id > 0) {
>                     // Notify that data has changed
>                     Uri itemUri = ContentUris.withAppendedId(UserContract.UserEntry.CONTENT_URI, id);
>                     getContext().getContentResolver().notifyChange(itemUri, null);
>                     return itemUri;
>                 }
>                 break;
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>         return null;
>     }
>
>     @Override
>     public int delete(@NonNull Uri uri, @Nullable String selection,
>                       @Nullable String[] selectionArgs) {
>         SQLiteDatabase db = dbHelper.getWritableDatabase();
>         int deletedRows = 0;
>
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 // Delete all matching users
>                 deletedRows = db.delete(UserContract.UserEntry.TABLE_NAME, selection, selectionArgs);
>                 break;
>             case USER_ID:
>                 // Delete single user by ID
>                 String id = uri.getPathSegments().get(1);
>                 selection = UserContract.UserEntry._ID + "=?";
>                 selectionArgs = new String[]{id};
>                 deletedRows = db.delete(UserContract.UserEntry.TABLE_NAME, selection, selectionArgs);
>                 break;
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         if (deletedRows > 0) {
>             getContext().getContentResolver().notifyChange(uri, null);
>         }
>         return deletedRows;
>     }
>
>     @Nullable
>     @Override
>     public String getType(@NonNull Uri uri) {
>         return null;
>     }
>
>     @Override
>     public int update(@NonNull Uri uri, @Nullable ContentValues values,
>                       @Nullable String selection, @Nullable String[] selectionArgs) {
>         return 0;
>     }
> }
> ```
>
> **4. activity_main.xml - Layout File**
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp">
>
>     <EditText
>         android:id="@+id/etName"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Enter Name"
>         android:layout_marginBottom="16dp"/>
>
>     <EditText
>         android:id="@+id/etPhoneNumber"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Enter Phone Number"
>         android:inputType="phone"
>         android:layout_marginBottom="24dp"/>
>
>     <Button
>         android:id="@+id/btnSave"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Save Data"
>         android:layout_marginBottom="16dp"/>
>
>     <Button
>         android:id="@+id/btnView"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="View Data"/>
>
> </LinearLayout>
> ```
>
> **5. MainActivity.java**
> ```java
> import android.content.ContentValues;
> import android.database.Cursor;
> import android.net.Uri;
> import android.os.Bundle;
> import android.view.View;
> import android.widget.Button;
> import android.widget.EditText;
> import android.widget.Toast;
> import androidx.appcompat.app.AppCompatActivity;
>
> public class MainActivity extends AppCompatActivity {
>
>     private EditText etName, etPhoneNumber;
>     private Button btnSave, btnView;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         // Initialize views
>         etName = findViewById(R.id.etName);
>         etPhoneNumber = findViewById(R.id.etPhoneNumber);
>         btnSave = findViewById(R.id.btnSave);
>         btnView = findViewById(R.id.btnView);
>
>         // Set click listeners
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
>     // Method to save user data using ContentProvider
>     private void saveUserData() {
>         String name = etName.getText().toString().trim();
>         String phone = etPhoneNumber.getText().toString().trim();
>
>         // Validate input
>         if (name.isEmpty() || phone.isEmpty()) {
>             Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
>             return;
>         }
>
>         // Create ContentValues with user data
>         ContentValues values = new ContentValues();
>         values.put(UserContract.UserEntry.COLUMN_NAME, name);
>         values.put(UserContract.UserEntry.COLUMN_PHONE, phone);
>
>         // Insert using ContentProvider
>         Uri uri = UserContract.UserEntry.CONTENT_URI;
>         Uri newUri = getContentResolver().insert(uri, values);
>
>         if (newUri != null) {
>             Toast.makeText(this, "Data saved successfully", Toast.LENGTH_SHORT).show();
>             etName.setText("");
>             etPhoneNumber.setText("");
>         } else {
>             Toast.makeText(this, "Failed to save data", Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     // Method to view all saved user data
>     private void viewUserData() {
>         // Query all users from ContentProvider
>         Uri uri = UserContract.UserEntry.CONTENT_URI;
>         Cursor cursor = getContentResolver().query(uri, null, null, null, null);
>
>         if (cursor != null && cursor.getCount() > 0) {
>             StringBuilder data = new StringBuilder();
>             while (cursor.moveToNext()) {
>                 String name = cursor.getString(cursor.getColumnIndexOrThrow(
>                     UserContract.UserEntry.COLUMN_NAME));
>                 String phone = cursor.getString(cursor.getColumnIndexOrThrow(
>                     UserContract.UserEntry.COLUMN_PHONE));
>                 data.append("Name: ").append(name)
>                     .append(", Phone: ").append(phone).append("\n");
>             }
>             cursor.close();
>             Toast.makeText(this, data.toString(), Toast.LENGTH_LONG).show();
>         } else {
>             Toast.makeText(this, "No data found", Toast.LENGTH_SHORT).show();
>         }
>     }
> }
> ```
>
> **6. AndroidManifest.xml - Add Content Provider**
> ```xml
> <application ...>
>     <activity android:name=".MainActivity">
>         <intent-filter>
>             <action android:name="android.intent.action.MAIN" />
>             <category android:name="android.intent.category.LAUNCHER" />
>         </intent-filter>
>     </activity>
>
>     <!-- Content Provider Declaration -->
>     <provider
>         android:name=".UserProvider"
>         android:authorities="com.example.userprovider"
>         android:exported="true" />
> </application>
> ```

---

### QUESTION 6

Android Fragment represents a behavior or a portion of a user interface in an activity. Multiple fragments can be combined in a single activity to build a multi-panel User Interface (UI) and reuse a fragment in multiple activities. As a mobile apps developer, you have been asked to develop an application with two fragments named FragmentOne and FragmentTwo. When a user click on the specific fragment, the description of the fragment displays on the fragment container in the main activity which hosts the fragments. Assume the ids for FragmentOne and FragmentTwo are btnFragment_one and btnFragment_two respectively. Hint: use linear layout to create a fragment container.

*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Fragment Implementation:**
>
> **1. activity_main.xml - Main Activity Layout**
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical">
>
>     <!-- Button Layout for Fragment Selection -->
>     <LinearLayout
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:orientation="horizontal"
>         android:padding="16dp">
>
>         <Button
>             android:id="@+id/btnFragment_one"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginEnd="8dp"
>             android:text="Fragment One"/>
>
>         <Button
>             android:id="@+id/btnFragment_two"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginStart="8dp"
>             android:text="Fragment Two"/>
>     </LinearLayout>
>
>     <!-- Fragment Container -->
>     <FrameLayout
>         android:id="@+id/fragment_container"
>         android:layout_width="match_parent"
>         android:layout_height="match_parent"/>
>
> </LinearLayout>
> ```
>
> **2. fragment_one.xml - Layout for FragmentOne**
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp"
>     android:background="#E8E8E8">
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="FRAGMENT ONE"
>         android:textSize="24sp"
>         android:textStyle="bold"
>         android:gravity="center"
>         android:layout_marginBottom="20dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="This is Fragment One description. Fragment One represents the first portion of the user interface. It contains specific functionality and UI elements that are part of the main activity."
>         android:textSize="16sp"
>         android:padding="16dp"
>         android:background="#FFFFFF"/>
>
> </LinearLayout>
> ```
>
> **3. fragment_two.xml - Layout for FragmentTwo**
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp"
>     android:background="#E0F2F1">
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="FRAGMENT TWO"
>         android:textSize="24sp"
>         android:textStyle="bold"
>         android:gravity="center"
>         android:layout_marginBottom="20dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="This is Fragment Two description. Fragment Two represents the second portion of the user interface. Multiple fragments can be combined in a single activity to build multi-panel UIs."
>         android:textSize="16sp"
>         android:padding="16dp"
>         android:background="#FFFFFF"/>
>
> </LinearLayout>
> ```
>
> **4. FragmentOne.java**
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
> }
> ```
>
> **5. FragmentTwo.java**
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
> }
> ```
>
> **6. MainActivity.java**
> ```java
> import android.os.Bundle;
> import android.view.View;
> import android.widget.Button;
> import androidx.appcompat.app.AppCompatActivity;
> import androidx.fragment.app.Fragment;
> import androidx.fragment.app.FragmentManager;
> import androidx.fragment.app.FragmentTransaction;
>
> public class MainActivity extends AppCompatActivity {
>
>     private Button btnFragmentOne, btnFragmentTwo;
>     private FragmentManager fragmentManager;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         // Initialize views
>         btnFragmentOne = findViewById(R.id.btnFragment_one);
>         btnFragmentTwo = findViewById(R.id.btnFragment_two);
>
>         // Initialize FragmentManager
>         fragmentManager = getSupportFragmentManager();
>
>         // Set click listeners
>         btnFragmentOne.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 loadFragment(new FragmentOne());
>             }
>         });
>
>         btnFragmentTwo.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 loadFragment(new FragmentTwo());
>             }
>         });
>     }
>
>     // Method to load fragment into container
>     private void loadFragment(Fragment fragment) {
>         // Begin fragment transaction
>         FragmentTransaction transaction = fragmentManager.beginTransaction();
>
>         // Replace the fragment in the container
>         transaction.replace(R.id.fragment_container, fragment);
>
>         // Add to back stack (optional)
>         transaction.addToBackStack(null);
>
>         // Commit the transaction
>         transaction.commit();
>     }
> }
> ```

---

### QUESTION 7

**(a)** There are tasks that do not really need to be visible to the user. A good example is playing a music. You don't need to keep the player's screen for song to play. Those kinds of applications/tasks runs in the background.

**i. Suggests the kind of android component that you can use to accomplish such kind of task.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The appropriate Android component for background tasks like playing music is a **Service**, specifically a **Foreground Service**.
>
> **Service**: A component that runs in the background to perform long-running operations without a user interface.
>
> **Foreground Service**: A service that shows a persistent notification to the user, indicating that the app is performing a task (like playing music). This has higher priority and is less likely to be killed by the system.

---

**ii. Based on your suggestion in part (i), write a java class to implement a task for playing music. Assume the music you want to play is located at Settings.System.DEFAULT_RINGTONE_URI**
*(7 Marks)*

> [!Tip]- Answer (Click to show)
> **Music Playing Service Implementation:**
>
> ```java
> import android.app.Notification;
> import android.app.NotificationChannel;
> import android.app.NotificationManager;
> import android.app.PendingIntent;
> import android.app.Service;
> import android.content.Intent;
> import android.media.MediaPlayer;
> import android.net.Uri;
> import android.os.Build;
> import android.os.IBinder;
> import android.provider.Settings;
> import androidx.core.app.NotificationCompat;
>
> public class MusicPlaybackService extends Service {
>
>     private static final String CHANNEL_ID = "MusicChannel";
>     private static final int NOTIFICATION_ID = 1;
>     private MediaPlayer mediaPlayer;
>
>     @Override
>     public void onCreate() {
>         super.onCreate();
>         createNotificationChannel();
>     }
>
>     @Override
>     public int onStartCommand(Intent intent, int flags, int startId) {
>         // Start as foreground service with notification
>         startForeground(NOTIFICATION_ID, createNotification());
>
>         // Start music playback
>         startMusic();
>
>         return START_STICKY;  // Service will be restarted if killed
>     }
>
>     private void startMusic() {
>         try {
>             // Get default ringtone URI
>             Uri ringtoneUri = Settings.System.DEFAULT_RINGTONE_URI;
>
>             // Initialize and start MediaPlayer
>             mediaPlayer = MediaPlayer.create(this, ringtoneUri);
>             mediaPlayer.setLooping(true);  // Loop the music
>             mediaPlayer.start();
>         } catch (Exception e) {
>             e.printStackTrace();
>             stopSelf();
>         }
>     }
>
>     private Notification createNotification() {
>         // Create intent to launch activity when notification is clicked
>         Intent notificationIntent = new Intent(this, MainActivity.class);
>         PendingIntent pendingIntent = PendingIntent.getActivity(this, 0,
>                 notificationIntent, PendingIntent.FLAG_IMMUTABLE);
>
>         // Build notification
>         NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
>                 .setContentTitle("Music Player")
>                 .setContentText("Playing default ringtone")
>                 .setSmallIcon(android.R.drawable.ic_media_play)
>                 .setContentIntent(pendingIntent)
>                 .setPriority(NotificationCompat.PRIORITY_LOW)
>                 .setOngoing(true);  // Non-dismissible notification
>
>         return builder.build();
>     }
>
>     private void createNotificationChannel() {
>         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
>             NotificationChannel channel = new NotificationChannel(
>                     CHANNEL_ID,
>                     "Music Service",
>                     NotificationManager.IMPORTANCE_LOW
>             );
>             NotificationManager manager = getSystemService(NotificationManager.class);
>             manager.createNotificationChannel(channel);
>         }
>     }
>
>     @Override
>     public void onDestroy() {
>         super.onDestroy();
>         // Release MediaPlayer resources
>         if (mediaPlayer != null) {
>             if (mediaPlayer.isPlaying()) {
>                 mediaPlayer.stop();
>             }
>             mediaPlayer.release();
>             mediaPlayer = null;
>         }
>     }
>
>     @Override
>     public IBinder onBind(Intent intent) {
>         return null;  // This service doesn't support binding
>     }
> }
> ```
>
> **Add to AndroidManifest.xml:**
> ```xml
> <service android:name=".MusicPlaybackService" />
> ```

---

**(b)** The management of CIVE cafeteria wants to implement an android system that will manage its customers. The application has only one activity named MainActivity with three edit texts and one button. One of the functionality of the application is to store the customer's information such as name, email and phone number. The customer's data are in small amount and are in key/value pairs. Write an android application that will store the customer's information in a Shared Preference. The ids for the edit texts and button are etName, etEmail, etPhoneNumber and btnSave.

*(6 Marks)*

> [!Tip]- Answer (Click to show)
> **SharedPreferences Implementation for Customer Management:**
>
> **1. activity_main.xml - Layout File**
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="20dp">
>
>     <EditText
>         android:id="@+id/etName"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Customer Name"
>         android:layout_marginBottom="16dp"/>
>
>     <EditText
>         android:id="@+id/etEmail"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Email Address"
>         android:inputType="textEmailAddress"
>         android:layout_marginBottom="16dp"/>
>
>     <EditText
>         android:id="@+id/etPhoneNumber"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Phone Number"
>         android:inputType="phone"
>         android:layout_marginBottom="24dp"/>
>
>     <Button
>         android:id="@+id/btnSave"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Save Customer Information"/>
>
> </LinearLayout>
> ```
>
> **2. MainActivity.java**
> ```java
> import android.content.Context;
> import android.content.SharedPreferences;
> import android.os.Bundle;
> import android.view.View;
> import android.widget.Button;
> import android.widget.EditText;
> import android.widget.Toast;
> import androidx.appcompat.app.AppCompatActivity;
>
> public class MainActivity extends AppCompatActivity {
>
>     private EditText etName, etEmail, etPhoneNumber;
>     private Button btnSave;
>
>     // SharedPreferences keys
>     private static final String PREF_NAME = "CustomerPrefs";
>     private static final String KEY_NAME = "customer_name";
>     private static final String KEY_EMAIL = "customer_email";
>     private static final String KEY_PHONE = "customer_phone";
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         // Initialize views
>         etName = findViewById(R.id.etName);
>         etEmail = findViewById(R.id.etEmail);
>         etPhoneNumber = findViewById(R.id.etPhoneNumber);
>         btnSave = findViewById(R.id.btnSave);
>
>         // Load saved data if exists
>         loadSavedData();
>
>         // Set click listener for save button
>         btnSave.setOnClickListener(new View.OnClickListener() {
>             @Override
>             public void onClick(View v) {
>                 saveCustomerData();
>             }
>         });
>     }
>
>     // Method to save customer data using SharedPreferences
>     private void saveCustomerData() {
>         // Get input values
>         String name = etName.getText().toString().trim();
>         String email = etEmail.getText().toString().trim();
>         String phone = etPhoneNumber.getText().toString().trim();
>
>         // Validate input
>         if (name.isEmpty() || email.isEmpty() || phone.isEmpty()) {
>             Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
>             return;
>         }
>
>         // Get SharedPreferences instance
>         SharedPreferences sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>
>         // Get editor to modify preferences
>         SharedPreferences.Editor editor = sharedPreferences.edit();
>
>         // Store data as key-value pairs
>         editor.putString(KEY_NAME, name);
>         editor.putString(KEY_EMAIL, email);
>         editor.putString(KEY_PHONE, phone);
>
>         // Apply changes (asynchronous save)
>         editor.apply();
>
>         Toast.makeText(this, "Customer information saved!", Toast.LENGTH_SHORT).show();
>     }
>
>     // Method to load previously saved data
>     private void loadSavedData() {
>         SharedPreferences sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>
>         // Retrieve data with default values if not found
>         String name = sharedPreferences.getString(KEY_NAME, "");
>         String email = sharedPreferences.getString(KEY_EMAIL, "");
>         String phone = sharedPreferences.getString(KEY_PHONE, "");
>
>         // Set retrieved data to EditTexts
>         etName.setText(name);
>         etEmail.setText(email);
>         etPhoneNumber.setText(phone);
>     }
> }
> ```

---

## END OF EXAMINATION PAPER