import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {

  stable var currentValue : Float = 1000;
  currentValue := 1000;

  let constant = 100;
  stable var startTime = Time.now();

  //Debug.print(debug_show(startTime));

  public func deposit(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount : Float) {
    if ((currentValue -amount) : Float >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Cannot process request. CurrentValue less than zero after withdrawal.");
    };
  };

  public query func getAmount() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsed = (currentTime - startTime) / 1000000000;
    currentValue := currentValue * (1.00001 ** Float.fromInt(timeElapsed));
    startTime := currentTime;
  };

};
