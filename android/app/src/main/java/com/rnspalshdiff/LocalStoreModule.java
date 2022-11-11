package com.rnspalshdiff;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

public class LocalStoreModule extends ReactContextBaseJavaModule {

  LocalStoreModule(ReactApplicationContext context) {
    super(context);
  }

  @NonNull
  @Override
  public String getName() {
    return "LocalStoreModule";
  }


  @ReactMethod
  public void showData(String key, Promise response) {
    SharedPreferences sh =getCurrentActivity().getSharedPreferences("UserPref", Context.MODE_PRIVATE);
    String value = sh.getString(key, "default");
    Log.d("Return value", value);
    response.resolve(value);
  }

  @ReactMethod
  public boolean saveData(String key, String data) {
    SharedPreferences sh = getCurrentActivity().getSharedPreferences("UserPref", Context.MODE_PRIVATE);
    SharedPreferences.Editor editor = sh.edit();
    editor.putString(key, data);
    return editor.commit();
  }
}
