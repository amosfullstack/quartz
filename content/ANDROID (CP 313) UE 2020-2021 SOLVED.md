
# ANDROID PROGRAMMING EXAMINATION
## UE CP 313 2020-2021

---

## SECTION A: (15 MARKS)

### QUESTION 1

**Answer the following questions:**

---

**a. With example, explain the difference between Implicit and Explicit Intent.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Explicit Intent**: Specifies the exact component (activity, service, etc.) to start by name. Used within the same application.
> *Example:* 
> ```java
> Intent intent = new Intent(this, SecondActivity.class);
> startActivity(intent);
> ```
>
> **Implicit Intent**: Declares an action to perform and lets another app handle it. Android system finds appropriate component to handle the intent.
> *Example:*
> ```java
> Intent intent = new Intent(Intent.ACTION_VIEW, 
> Uri.parse("https://www.google.com"));
> startActivity(intent);
> ```

---

**b. Define a Splash Screen.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> A **Splash Screen** is a startup screen that appears while the application is loading. It displays a logo, brand name, or visual element to provide immediate feedback to users that the app is launching, improving user experience during initialization time.

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
> **onSaveInstanceState()** is called to save UI state data before the activity might be destroyed, storing temporary data in a Bundle to restore when the activity recreates.

---

### QUESTION 2

**Provide a brief description of the following android project resources:**
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


### QUESTION 3
**With examples, briefly provide the explanation of the following features:**
*(1 Mark Each)*

**a. String.xml**

> [!Tip]- Answer (Click to show)
> **String.xml** is a resource file in res/values/ that stores all text strings used in the application. It enables localization and centralizes text management.
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
> *Example:* Pixel 4 AVD with API 30, running Android 11, with 2GB RAM and 200MB internal storage.

---

**d. TOAST**

> [!Tip]- Answer (Click to show)
> **Toast** is a popup message that appears briefly on the screen and automatically fades away without user interaction. It provides simple feedback without interrupting the current activity.
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
> **Sending data from ActivityOne to ActivityTwo using Intent:**
>
> ```java
> // In ActivityOne.java
> Intent intent = new Intent(ActivityOne.this, ActivityTwo.class);
>
> // Sending student data using putExtra() methods
> intent.putExtra("student_name", studentName);
> intent.putExtra("student_region", selectedRegion);
> intent.putExtra("student_age", age);
> intent.putExtra("student_gender", selectedGender);
>
> // Sending array of subjects (checkboxes selected)
> String[] subjects = {"English", "Mathematics", "Physics", "Chemistry", "Biology"};
> intent.putExtra("student_subjects", subjects);
>
> // Using putExtras() with Bundle
> Bundle studentBundle = new Bundle();
> studentBundle.putString("name", studentName);
> studentBundle.putString("region", selectedRegion);
> studentBundle.putInt("age", Integer.parseInt(ageText));
> studentBundle.putString("gender", selectedGender);
> studentBundle.putStringArray("subjects", subjects);
>
> intent.putExtras(studentBundle);
> startActivity(intent);
> ```

---

**b. Using the methods of Intent class show how you will receive the student's data within the second activity.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Receiving data in ActivityTwo from Intent:**
>
> ```java
> // In ActivityTwo.java - onCreate() method
> Intent receivedIntent = getIntent();
>
> // Retrieving individual extras
> String studentName = receivedIntent.getStringExtra("student_name");
> String studentRegion = receivedIntent.getStringExtra("student_region");
> int studentAge = receivedIntent.getIntExtra("student_age", 0);
> String studentGender = receivedIntent.getStringExtra("student_gender");
> String[] studentSubjects = receivedIntent.getStringArrayExtra("student_subjects");
>
> // Retrieving from Bundle
> Bundle receivedBundle = receivedIntent.getExtras();
> if (receivedBundle != null) {
>     String name = receivedBundle.getString("name");
>     String region = receivedBundle.getString("region");
>     int age = receivedBundle.getInt("age");
>     String gender = receivedBundle.getString("gender");
>     String[] subjects = receivedBundle.getStringArray("subjects");
>
>     // Display or process the received data
>     textViewName.setText(name);
>     textViewRegion.setText(region);
>     textViewAge.setText(String.valueOf(age));
>     textViewGender.setText(gender);
> }
> ```

---

**c. By the help of SQLiteOpenHelper class, show how you can save the student's details in a database. Use user and student as the name of the database and table respectively.**
*(9 Marks)*

> [!Tip]- Answer (Click to show)
> **SQLiteOpenHelper implementation for student database:**
>
> ```java
> // DatabaseHelper.java - SQLiteOpenHelper class
> import android.content.ContentValues;
> import android.content.Context;
> import android.database.sqlite.SQLiteDatabase;
> import android.database.sqlite.SQLiteOpenHelper;
>
> public class DatabaseHelper extends SQLiteOpenHelper {
>
>     // Database and table names
>     private static final String DATABASE_NAME = "user.db";
>     private static final String TABLE_NAME = "student";
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
>     // Create table query
>     private static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + "("
>             + COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, "
>             + COL_NAME + " TEXT, "
>             + COL_REGION + " TEXT, "
>             + COL_AGE + " INTEGER, "
>             + COL_GENDER + " TEXT, "
>             + COL_SUBJECTS + " TEXT)";
>
>     public DatabaseHelper(Context context) {
>         super(context, DATABASE_NAME, null, DATABASE_VERSION);
>     }
>
>     @Override
>     public void onCreate(SQLiteDatabase db) {
>         // Create the student table
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
>         SQLiteDatabase db = this.getWritableDatabase();
>         ContentValues contentValues = new ContentValues();
>
>         contentValues.put(COL_NAME, name);
>         contentValues.put(COL_REGION, region);
>         contentValues.put(COL_AGE, age);
>         contentValues.put(COL_GENDER, gender);
>         contentValues.put(COL_SUBJECTS, subjects);
>
>         // Insert row and return the row ID
>         long id = db.insert(TABLE_NAME, null, contentValues);
>         db.close();
>         return id;
>     }
>
>     // Method to save all student details from ActivityOne
>     public void saveStudentDetails(String name, String region, int age, 
>                                     String gender, String[] subjects) {
>         // Convert subjects array to comma-separated string
>         StringBuilder subjectsStr = new StringBuilder();
>         for (String subject : subjects) {
>             subjectsStr.append(subject).append(",");
>         }
>
>         // Insert into database
>         long result = insertStudent(name, region, age, gender, 
>                                    subjectsStr.toString());
>
>         if (result != -1) {
>             // Successfully saved
>             System.out.println("Student saved with ID: " + result);
>         } else {
>             // Failed to save
>             System.out.println("Failed to save student");
>         }
>     }
> }
>
> // Usage in ActivityOne or ActivityTwo
> DatabaseHelper dbHelper = new DatabaseHelper(this);
> dbHelper.saveStudentDetails("John Doe", "Dar es Salaam", 16, 
>                             "Male", new String[]{"English", "Math", "Physics"});
> ```

---

### QUESTION 5

The prime purpose of a content provider is to serve as a central repository of data where users can store and can fetch the data. The access of this repository is given to other applications also but in a safe manner in order to serve the different requirements of the user. Write an application that will allow users store their details such as name and phone numbers in a content provider. The application should also allow other applications to retrieve the stored user's information. The application has one activity called MainActivity, two edit texts for name and phone number and two buttons for save data and view data. The ids for the views are etName, etPhoneNumber, btnSave and btnView.
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Content Provider Application Implementation:**
>
> **1. UserContract.java - Defines the database schema**
> ```java
> import android.provider.BaseColumns;
>
> public class UserContract {
>     private UserContract() {}
>
>     public static class UserEntry implements BaseColumns {
>         public static final String TABLE_NAME = "users";
>         public static final String COLUMN_NAME = "name";
>         public static final String COLUMN_PHONE = "phone";
>
>         // Content provider constants
>         public static final String CONTENT_AUTHORITY = "com.example.userprovider";
>         public static final String CONTENT_URI = "content://" + CONTENT_AUTHORITY + "/" + TABLE_NAME;
>         public static final String CONTENT_TYPE = "vnd.android.cursor.dir/vnd." + CONTENT_AUTHORITY + "." + TABLE_NAME;
>         public static final String CONTENT_ITEM_TYPE = "vnd.android.cursor.item/vnd." + CONTENT_AUTHORITY + "." + TABLE_NAME;
>     }
> }
> ```
>
> **2. UserDbHelper.java - SQLiteOpenHelper implementation**
> ```java
> import android.content.Context;
> import android.database.sqlite.SQLiteDatabase;
> import android.database.sqlite.SQLiteOpenHelper;
>
> public class UserDbHelper extends SQLiteOpenHelper {
>     private static final String DATABASE_NAME = "user.db";
>     private static final int DATABASE_VERSION = 1;
>
>     private static final String CREATE_TABLE = "CREATE TABLE " +
>             UserContract.UserEntry.TABLE_NAME + " (" +
>             UserContract.UserEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
>             UserContract.UserEntry.COLUMN_NAME + " TEXT NOT NULL, " +
>             UserContract.UserEntry.COLUMN_PHONE + " TEXT NOT NULL)";
>
>     public UserDbHelper(Context context) {
>         super(context, DATABASE_NAME, null, DATABASE_VERSION);
>     }
>
>     @Override
>     public void onCreate(SQLiteDatabase db) {
>         db.execSQL(CREATE_TABLE);
>     }
>
>     @Override
>     public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
>         db.execSQL("DROP TABLE IF EXISTS " + UserContract.UserEntry.TABLE_NAME);
>         onCreate(db);
>     }
> }
> ```
>
> **3. UserProvider.java - Content Provider implementation**
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
>     private UserDbHelper dbHelper;
>     private static final int USERS = 100;
>     private static final int USER_ID = 101;
>
>     private static final UriMatcher uriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
>
>     static {
>         uriMatcher.addURI(UserContract.UserEntry.CONTENT_AUTHORITY, 
>                           UserContract.UserEntry.TABLE_NAME, USERS);
>         uriMatcher.addURI(UserContract.UserEntry.CONTENT_AUTHORITY, 
>                          UserContract.UserEntry.TABLE_NAME + "/#", USER_ID);
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
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 cursor = db.query(UserContract.UserEntry.TABLE_NAME, projection, 
>                                  selection, selectionArgs, null, null, sortOrder);
>                 break;
>             case USER_ID:
>                 selection = UserContract.UserEntry._ID + "=?";
>                 selectionArgs = new String[]{String.valueOf(ContentUris.parseId(uri))};
>                 cursor = db.query(UserContract.UserEntry.TABLE_NAME, projection, 
>                                  selection, selectionArgs, null, null, sortOrder);
>                 break;
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
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
>                 id = db.insert(UserContract.UserEntry.TABLE_NAME, null, values);
>                 if (id != -1) {
>                     getContext().getContentResolver().notifyChange(uri, null);
>                     return ContentUris.withAppendedId(uri, id);
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
>         int deletedRows;
>
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 deletedRows = db.delete(UserContract.UserEntry.TABLE_NAME, 
>                                        selection, selectionArgs);
>                 break;
>             case USER_ID:
>                 selection = UserContract.UserEntry._ID + "=?";
>                 selectionArgs = new String[]{String.valueOf(ContentUris.parseId(uri))};
>                 deletedRows = db.delete(UserContract.UserEntry.TABLE_NAME, 
>                                        selection, selectionArgs);
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
>     @Override
>     public int update(@NonNull Uri uri, @Nullable ContentValues values, 
>                       @Nullable String selection, @Nullable String[] selectionArgs) {
>         SQLiteDatabase db = dbHelper.getWritableDatabase();
>         int updatedRows;
>
>         switch (uriMatcher.match(uri)) {
>             case USERS:
>                 updatedRows = db.update(UserContract.UserEntry.TABLE_NAME, 
>                                        values, selection, selectionArgs);
>                 break;
>             case USER_ID:
>                 selection = UserContract.UserEntry._ID + "=?";
>                 selectionArgs = new String[]{String.valueOf(ContentUris.parseId(uri))};
>                 updatedRows = db.update(UserContract.UserEntry.TABLE_NAME, 
>                                        values, selection, selectionArgs);
>                 break;
>             default:
>                 throw new IllegalArgumentException("Unknown URI: " + uri);
>         }
>
>         if (updatedRows > 0) {
>             getContext().getContentResolver().notifyChange(uri, null);
>         }
>         return updatedRows;
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
> }
> ```
>
> **4. activity_main.xml - Layout file**
> ```xml
> <?xml version="1.0" encoding="utf-8"?>
> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:layout_width="match_parent"
>     android:layout_height="match_parent"
>     android:orientation="vertical"
>     android:padding="16dp">
>
>     <EditText
>         android:id="@+id/etName"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Enter Name"
>         android:inputType="textPersonName"
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
>     private EditText etName, etPhoneNumber;
>     private Button btnSave, btnView;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         etName = findViewById(R.id.etName);
>         etPhoneNumber = findViewById(R.id.etPhoneNumber);
>         btnSave = findViewById(R.id.btnSave);
>         btnView = findViewById(R.id.btnView);
>
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
>     private void saveUserData() {
>         String name = etName.getText().toString().trim();
>         String phone = etPhoneNumber.getText().toString().trim();
>
>         if (name.isEmpty() || phone.isEmpty()) {
>             Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
>             return;
>         }
>
>         ContentValues values = new ContentValues();
>         values.put(UserContract.UserEntry.COLUMN_NAME, name);
>         values.put(UserContract.UserEntry.COLUMN_PHONE, phone);
>
>         Uri uri = Uri.parse(UserContract.UserEntry.CONTENT_URI);
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
>     private void viewUserData() {
>         Uri uri = Uri.parse(UserContract.UserEntry.CONTENT_URI);
>         Cursor cursor = getContentResolver().query(uri, null, null, null, null);
>
>         if (cursor != null && cursor.moveToFirst()) {
>             StringBuilder data = new StringBuilder();
>             do {
>                 String name = cursor.getString(cursor.getColumnIndexOrThrow(
>                     UserContract.UserEntry.COLUMN_NAME));
>                 String phone = cursor.getString(cursor.getColumnIndexOrThrow(
>                     UserContract.UserEntry.COLUMN_PHONE));
>                 data.append("Name: ").append(name)
>                     .append(", Phone: ").append(phone).append("\n");
>             } while (cursor.moveToNext());
>
>             cursor.close();
>             Toast.makeText(this, data.toString(), Toast.LENGTH_LONG).show();
>         } else {
>             Toast.makeText(this, "No data found", Toast.LENGTH_SHORT).show();
>         }
>     }
> }
> ```
>
> **6. AndroidManifest.xml - Add Content Provider declaration**
> ```xml
> <application ...>
>     <activity android:name=".MainActivity">
>         <intent-filter>
>             <action android:name="android.intent.action.MAIN" />
>             <category android:name="android.intent.category.LAUNCHER" />
>         </intent-filter>
>     </activity>
>
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
> **1. activity_main.xml - Main activity layout with fragment container**
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
>             android:text="Fragment One"
>             android:backgroundTint="#6200EE"/>
>
>         <Button
>             android:id="@+id/btnFragment_two"
>             android:layout_width="0dp"
>             android:layout_height="wrap_content"
>             android:layout_weight="1"
>             android:layout_marginStart="8dp"
>             android:text="Fragment Two"
>             android:backgroundTint="#03DAC5"/>
>     </LinearLayout>
>
>     <!-- Fragment Container -->
>     <FrameLayout
>         android:id="@+id/fragment_container"
>         android:layout_width="match_parent"
>         android:layout_height="match_parent"
>         android:background="#F0F0F0"/>
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
>     android:padding="24dp"
>     android:background="#E8E8E8">
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="FRAGMENT ONE"
>         android:textSize="24sp"
>         android:textColor="#6200EE"
>         android:textStyle="bold"
>         android:gravity="center"
>         android:layout_marginBottom="24dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="This is Fragment One description.\n\nFragment One represents the first portion of the user interface. It contains specific functionality and UI elements that are part of the main activity. Clicking on Fragment One button displays this description in the fragment container."
>         android:textSize="16sp"
>         android:lineSpacingExtra="4dp"
>         android:padding="16dp"
>         android:background="#FFFFFF"
>         android:elevation="2dp"/>
>
>     <ImageView
>         android:layout_width="100dp"
>         android:layout_height="100dp"
>         android:layout_gravity="center_horizontal"
>         android:layout_marginTop="32dp"
>         android:src="@android:drawable/ic_dialog_info"
>         android:contentDescription="Info Icon"/>
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
>     android:padding="24dp"
>     android:background="#E0F2F1">
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="FRAGMENT TWO"
>         android:textSize="24sp"
>         android:textColor="#03DAC5"
>         android:textStyle="bold"
>         android:gravity="center"
>         android:layout_marginBottom="24dp"/>
>
>     <TextView
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="This is Fragment Two description.\n\nFragment Two represents the second portion of the user interface. It contains different functionality and UI elements. Multiple fragments can be combined in a single activity to build multi-panel UIs and fragments can be reused in multiple activities."
>         android:textSize="16sp"
>         android:lineSpacingExtra="4dp"
>         android:padding="16dp"
>         android:background="#FFFFFF"
>         android:elevation="2dp"/>
>
>     <Button
>         android:layout_width="wrap_content"
>         android:layout_height="wrap_content"
>         android:layout_gravity="center_horizontal"
>         android:layout_marginTop="32dp"
>         android:text="Fragment Two Action"
>         android:backgroundTint="#03DAC5"/>
>
> </LinearLayout>
> ```
>
> **4. FragmentOne.java - First fragment class**
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
>         // Additional initialization after view is created
>     }
> }
> ```
>
> **5. FragmentTwo.java - Second fragment class**
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
>         // Additional initialization after view is created
>     }
> }
> ```
>
> **6. MainActivity.java - Host activity with fragment management**
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
>     private Button btnFragmentOne, btnFragmentTwo;
>     private FragmentManager fragmentManager;
>
>     @Override
>     protected void onCreate(Bundle savedInstanceState) {
>         super.onCreate(savedInstanceState);
>         setContentView(R.layout.activity_main);
>
>         btnFragmentOne = findViewById(R.id.btnFragment_one);
>         btnFragmentTwo = findViewById(R.id.btnFragment_two);
>
>         // Initialize FragmentManager
>         fragmentManager = getSupportFragmentManager();
>
>         // Set default fragment (optional)
>         if (savedInstanceState == null) {
>             loadFragment(new FragmentOne());
>         }
>
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
>     private void loadFragment(Fragment fragment) {
>         // Begin fragment transaction
>         FragmentTransaction transaction = fragmentManager.beginTransaction();
>
>         // Replace the fragment in the container
>         transaction.replace(R.id.fragment_container, fragment);
>
>         // Add to back stack (optional - allows back navigation)
>         transaction.addToBackStack(null);
>
>         // Commit the transaction
>         transaction.commit();
>     }
>
>     // Handle back button to navigate through fragments
>     @Override
>     public void onBackPressed() {
>         if (fragmentManager.getBackStackEntryCount() > 1) {
>             fragmentManager.popBackStack();
>         } else {
>             super.onBackPressed();
>         }
>     }
> }
> ```
>
> **7. Alternative approach with FragmentTransaction methods (Bonus)**
> ```java
> // Additional fragment transaction methods
> private void loadFragmentWithAnimation(Fragment fragment) {
>     FragmentTransaction transaction = fragmentManager.beginTransaction();
>
>     // Add custom animations
>     transaction.setCustomAnimations(
>         android.R.anim.fade_in,     // enter
>         android.R.anim.fade_out,    // exit
>         android.R.anim.slide_in_left, // popEnter
>         android.R.anim.slide_out_right // popExit
>     );
>
>     transaction.replace(R.id.fragment_container, fragment);
>     transaction.addToBackStack(null);
>     transaction.commit();
> }
>
> // Method to pass data to fragments
> private void loadFragmentWithData(Fragment fragment, Bundle data) {
>     fragment.setArguments(data);
>     loadFragment(fragment);
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
> - **Service**: A component that runs in the background to perform long-running operations without a user interface.
> - **Foreground Service**: A service that shows a persistent notification to the user, indicating that the app is performing a task (like playing music). This has higher priority and is less likely to be killed by the system.
>
> For music playback, the recommended approach is using **MediaBrowserService** or **MediaSession** with a Foreground Service, which properly integrates with Android's audio framework and maintains playback even when the app is not visible.

---

**ii. Based on your suggestion in part (i), write a java class to implement a task for playing music. Assume the music you want to play is located at Settings.System.DEFAULT_RINGTONE_URI**
*(7 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete Music Playing Service Implementation:**
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
>     private static final String CHANNEL_ID = "MusicPlaybackChannel";
>     private static final int NOTIFICATION_ID = 1;
>     private MediaPlayer mediaPlayer;
>     private boolean isPlaying = false;
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
>         // Initialize and start music playback
>         startMusicPlayback();
>
>         // Return START_STICKY to ensure service restarts if killed
>         return START_STICKY;
>     }
>
>     private void startMusicPlayback() {
>         try {
>             // Get default ringtone URI (as specified in the question)
>             Uri ringtoneUri = Settings.System.DEFAULT_RINGTONE_URI;
>
>             // Initialize MediaPlayer
>             mediaPlayer = MediaPlayer.create(this, ringtoneUri);
>
>             // Set loop to true for continuous playback
>             mediaPlayer.setLooping(true);
>
>             // Set volume
>             mediaPlayer.setVolume(0.5f, 0.5f);
>
>             // Set completion listener
>             mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
>                 @Override
>                 public void onCompletion(MediaPlayer mp) {
>                     // Handle completion if not looping
>                     stopSelf();
>                 }
>             });
>
>             // Set error listener
>             mediaPlayer.setOnErrorListener(new MediaPlayer.OnErrorListener() {
>                 @Override
>                 public boolean onError(MediaPlayer mp, int what, int extra) {
>                     // Handle errors
>                     stopSelf();
>                     return false;
>                 }
>             });
>
>             // Start playback
>             mediaPlayer.start();
>             isPlaying = true;
>
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
>         // Create play/pause action
>         Intent playPauseIntent = new Intent(this, MusicPlaybackService.class);
>         playPauseIntent.setAction("PLAY_PAUSE");
>         PendingIntent playPausePendingIntent = PendingIntent.getService(this, 1,
>                 playPauseIntent, PendingIntent.FLAG_IMMUTABLE);
>
>         // Create stop action
>         Intent stopIntent = new Intent(this, MusicPlaybackService.class);
>         stopIntent.setAction("STOP");
>         PendingIntent stopPendingIntent = PendingIntent.getService(this, 2,
>                 stopIntent, PendingIntent.FLAG_IMMUTABLE);
>
>         // Build notification
>         NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
>                 .setContentTitle("Music Player")
>                 .setContentText("Playing default ringtone")
>                 .setSmallIcon(android.R.drawable.ic_media_play)
>                 .setContentIntent(pendingIntent)
>                 .setPriority(NotificationCompat.PRIORITY_LOW)
>                 .setOngoing(true) // Makes notification non-dismissible
>                 .addAction(android.R.drawable.ic_media_pause, "Pause", playPausePendingIntent)
>                 .addAction(android.R.drawable.ic_menu_close_clear_cancel, "Stop", stopPendingIntent);
>
>         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
>             builder.setChannelId(CHANNEL_ID);
>         }
>
>         return builder.build();
>     }
>
>     private void createNotificationChannel() {
>         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
>             NotificationChannel channel = new NotificationChannel(
>                     CHANNEL_ID,
>                     "Music Playback Service",
>                     NotificationManager.IMPORTANCE_LOW
>             );
>             channel.setDescription("Channel for music playback service");
>
>             NotificationManager manager = getSystemService(NotificationManager.class);
>             manager.createNotificationChannel(channel);
>         }
>     }
>
>     @Override
>     public IBinder onBind(Intent intent) {
>         return null; // This service doesn't support binding
>     }
>
>     @Override
>     public void onDestroy() {
>         super.onDestroy();
>         // Clean up resources
>         if (mediaPlayer != null) {
>             if (mediaPlayer.isPlaying()) {
>                 mediaPlayer.stop();
>             }
>             mediaPlayer.release();
>             mediaPlayer = null;
>         }
>         isPlaying = false;
>     }
>
>     // Method to handle actions from notification
>     private void handleAction(String action) {
>         switch (action) {
>             case "PLAY_PAUSE":
>                 if (isPlaying) {
>                     mediaPlayer.pause();
>                     isPlaying = false;
>                     updateNotificationPlayPauseIcon(false);
>                 } else {
>                     mediaPlayer.start();
>                     isPlaying = true;
>                     updateNotificationPlayPauseIcon(true);
>                 }
>                 break;
>             case "STOP":
>                 stopSelf();
>                 break;
>         }
>     }
>
>     private void updateNotificationPlayPauseIcon(boolean isPlaying) {
>         // Update notification with new icon
>         Notification notification = createNotification();
>         NotificationManager manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
>         manager.notify(NOTIFICATION_ID, notification);
>     }
> }
> ```
>
> **Additional required code in AndroidManifest.xml:**
> ```xml
> <service
>     android:name=".MusicPlaybackService"
>     android:enabled="true"
>     android:exported="false" />
> ```

---

**(b)** The management of CIVE cafeteria wants to implement an android system that will manage its customers. The application has only one activity named MainActivity with three edit texts and one button. One of the functionality of the application is to store the customer's information such as name, email and phone number. The customer's data are in small amount and are in key/value pairs. Write an android application that will store the customer's information in a Shared Preference. The ids for the edit texts and button are etName, etEmail, etPhoneNumber and btnSave.
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> **Complete SharedPreferences Implementation for Customer Management:**
>
> **1. activity_main.xml - Layout file**
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
>         android:text="CIVE Cafeteria Customer Management"
>         android:textSize="20sp"
>         android:textStyle="bold"
>         android:gravity="center"
>         android:textColor="#333333"
>         android:layout_marginBottom="32dp"/>
>
>     <EditText
>         android:id="@+id/etName"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Customer Name"
>         android:inputType="textPersonName"
>         android:padding="12dp"
>         android:background="@android:drawable/editbox_background"
>         android:layout_marginBottom="16dp"/>
>
>     <EditText
>         android:id="@+id/etEmail"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:hint="Email Address"
>         android:inputType="textEmailAddress"
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
>     <Button
>         android:id="@+id/btnSave"
>         android:layout_width="match_parent"
>         android:layout_height="wrap_content"
>         android:text="Save Customer Information"
>         android:backgroundTint="#4CAF50"
>         android:textColor="#FFFFFF"
>         android:textSize="16sp"
>         android:padding="12dp"/>
>
> </LinearLayout>
> ```
>
> **2. MainActivity.java - Complete implementation**
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
>         // Load existing data if available
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
>     /**
>      * Method to save customer data using SharedPreferences
>      */
>     private void saveCustomerData() {
>         // Get input values
>         String name = etName.getText().toString().trim();
>         String email = etEmail.getText().toString().trim();
>         String phone = etPhoneNumber.getText().toString().trim();
>
>         // Validate input
>         if (name.isEmpty()) {
>             etName.setError("Name is required");
>             etName.requestFocus();
>             return;
>         }
>
>         if (email.isEmpty()) {
>             etEmail.setError("Email is required");
>             etEmail.requestFocus();
>             return;
>         }
>
>         if (!android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
>             etEmail.setError("Enter a valid email address");
>             etEmail.requestFocus();
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
>             etPhoneNumber.setError("Enter a valid phone number");
>             etPhoneNumber.requestFocus();
>             return;
>         }
>
>         // Save to SharedPreferences
>         SharedPreferences sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>         SharedPreferences.Editor editor = sharedPreferences.edit();
>
>         editor.putString(KEY_NAME, name);
>         editor.putString(KEY_EMAIL, email);
>         editor.putString(KEY_PHONE, phone);
>         editor.apply(); // Use apply() for asynchronous save, or commit() for synchronous
>
>         // Show success message
>         Toast.makeText(this, "Customer information saved successfully!", Toast.LENGTH_SHORT).show();
>
>         // Optional: Clear fields after save
>         // clearFields();
>     }
>
>     /**
>      * Method to load previously saved data
>      */
>     private void loadSavedData() {
>         SharedPreferences sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>
>         String name = sharedPreferences.getString(KEY_NAME, "");
>         String email = sharedPreferences.getString(KEY_EMAIL, "");
>         String phone = sharedPreferences.getString(KEY_PHONE, "");
>
>         etName.setText(name);
>         etEmail.setText(email);
>         etPhoneNumber.setText(phone);
>
>         // Optional: Show welcome back message if data exists
>         if (!name.isEmpty()) {
>             Toast.makeText(this, "Welcome back, " + name + "!", Toast.LENGTH_SHORT).show();
>         }
>     }
>
>     /**
>      * Method to clear all input fields
>      */
>     private void clearFields() {
>         etName.setText("");
>         etEmail.setText("");
>         etPhoneNumber.setText("");
>         etName.requestFocus();
>     }
>
>     /**
>      * Method to clear all saved preferences
>      */
>     private void clearAllSavedData() {
>         SharedPreferences sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>         SharedPreferences.Editor editor = sharedPreferences.edit();
>         editor.clear();
>         editor.apply();
>         clearFields();
>         Toast.makeText(this, "All customer data cleared!", Toast.LENGTH_SHORT).show();
>     }
>
>     /**
>      * Method to retrieve and display saved data
>      */
>     private void displaySavedData() {
>         SharedPreferences sharedPreferences = getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>
>         String name = sharedPreferences.getString(KEY_NAME, "Not set");
>         String email = sharedPreferences.getString(KEY_EMAIL, "Not set");
>         String phone = sharedPreferences.getString(KEY_PHONE, "Not set");
>
>         String message = "Saved Customer Information:\n\n" +
>                          "Name: " + name + "\n" +
>                          "Email: " + email + "\n" +
>                          "Phone: " + phone;
>
>         Toast.makeText(this, message, Toast.LENGTH_LONG).show();
>     }
>
>     // Optional: Override onPause to auto-save if needed
>     @Override
>     protected void onPause() {
>         super.onPause();
>         // Auto-save functionality can be added here
>     }
> }
> ```
>
> **3. Enhanced version with multiple customers (Bonus example)**
> ```java
> // Additional class for managing multiple customers
> import com.google.gson.Gson;
> import com.google.gson.reflect.TypeToken;
> import java.lang.reflect.Type;
> import java.util.ArrayList;
> import java.util.List;
>
> public class CustomerManager {
>     private SharedPreferences sharedPreferences;
>     private static final String PREF_NAME = "MultiCustomerPrefs";
>     private static final String KEY_CUSTOMER_LIST = "customer_list";
>     private Gson gson;
>
>     public CustomerManager(Context context) {
>         sharedPreferences = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
>         gson = new Gson();
>     }
>
>     // Save list of customers
>     public void saveCustomers(List<Customer> customerList) {
>         String json = gson.toJson(customerList);
>         SharedPreferences.Editor editor = sharedPreferences.edit();
>         editor.putString(KEY_CUSTOMER_LIST, json);
>         editor.apply();
>     }
>
>     // Retrieve list of customers
>     public List<Customer> getCustomers() {
>         String json = sharedPreferences.getString(KEY_CUSTOMER_LIST, "");
>         if (json.isEmpty()) {
>             return new ArrayList<>();
>         }
>         Type type = new TypeToken<List<Customer>>(){}.getType();
>         return gson.fromJson(json, type);
>     }
>
>     // Add single customer
>     public void addCustomer(Customer customer) {
>         List<Customer> customers = getCustomers();
>         customers.add(customer);
>         saveCustomers(customers);
>     }
> }
>
> // Customer model class
> class Customer {
>     String name;
>     String email;
>     String phone;
>
>     public Customer(String name, String email, String phone) {
>         this.name = name;
>         this.email = email;
>         this.phone = phone;
>     }
> }
> ```

---

## END OF EXAMINATION PAPER