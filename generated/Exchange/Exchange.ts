// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Received extends ethereum.Event {
  get params(): Received__Params {
    return new Received__Params(this);
  }
}

export class Received__Params {
  _event: Received;

  constructor(event: Received) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get param1(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class jobActive extends ethereum.Event {
  get params(): jobActive__Params {
    return new jobActive__Params(this);
  }
}

export class jobActive__Params {
  _event: jobActive;

  constructor(event: jobActive) {
    this._event = event;
  }

  get _jobId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _client(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _provider(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _jobCost(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _jobURI(): string {
    return this._event.parameters[4].value.toString();
  }

  get _status(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class jobCancelled extends ethereum.Event {
  get params(): jobCancelled__Params {
    return new jobCancelled__Params(this);
  }
}

export class jobCancelled__Params {
  _event: jobCancelled;

  constructor(event: jobCancelled) {
    this._event = event;
  }

  get _jobId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _client(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _provider(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _jobCost(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _jobURI(): string {
    return this._event.parameters[4].value.toString();
  }

  get _status(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class jobClosed extends ethereum.Event {
  get params(): jobClosed__Params {
    return new jobClosed__Params(this);
  }
}

export class jobClosed__Params {
  _event: jobClosed;

  constructor(event: jobClosed) {
    this._event = event;
  }

  get _jobId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _client(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _provider(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _jobCost(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _jobURI(): string {
    return this._event.parameters[4].value.toString();
  }

  get _status(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get _openLabNFTURI(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class jobCreated extends ethereum.Event {
  get params(): jobCreated__Params {
    return new jobCreated__Params(this);
  }
}

export class jobCreated__Params {
  _event: jobCreated;

  constructor(event: jobCreated) {
    this._event = event;
  }

  get _jobId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _client(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _payableToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _jobCost(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _jobURI(): string {
    return this._event.parameters[4].value.toString();
  }

  get _status(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class Exchange__jobsListResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: string;
  value5: i32;
  value6: string;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: string,
    value5: i32,
    value6: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    map.set("value6", ethereum.Value.fromString(this.value6));
    return map;
  }

  getClient(): Address {
    return this.value0;
  }

  getProvider(): Address {
    return this.value1;
  }

  getPayableToken(): Address {
    return this.value2;
  }

  getJobCost(): BigInt {
    return this.value3;
  }

  getJobURI(): string {
    return this.value4;
  }

  getStatus(): i32 {
    return this.value5;
  }

  getOpenLabNFTURI(): string {
    return this.value6;
  }
}

export class Exchange extends ethereum.SmartContract {
  static bind(address: Address): Exchange {
    return new Exchange("Exchange", address);
  }

  clientAddresses(param0: Address): boolean {
    let result = super.call(
      "clientAddresses",
      "clientAddresses(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_clientAddresses(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "clientAddresses",
      "clientAddresses(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  factoryAddress(): Address {
    let result = super.call("factoryAddress", "factoryAddress():(address)", []);

    return result[0].toAddress();
  }

  try_factoryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "factoryAddress",
      "factoryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  factoryOwner(): Address {
    let result = super.call("factoryOwner", "factoryOwner():(address)", []);

    return result[0].toAddress();
  }

  try_factoryOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("factoryOwner", "factoryOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isEnabled(): boolean {
    let result = super.call("isEnabled", "isEnabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_isEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isEnabled", "isEnabled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  jobsList(param0: BigInt): Exchange__jobsListResult {
    let result = super.call(
      "jobsList",
      "jobsList(uint256):(address,address,address,uint256,string,uint8,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Exchange__jobsListResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toString(),
      result[5].toI32(),
      result[6].toString()
    );
  }

  try_jobsList(param0: BigInt): ethereum.CallResult<Exchange__jobsListResult> {
    let result = super.tryCall(
      "jobsList",
      "jobsList(uint256):(address,address,address,uint256,string,uint8,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Exchange__jobsListResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toString(),
        value[5].toI32(),
        value[6].toString()
      )
    );
  }

  openLabNFTAddress(): Address {
    let result = super.call(
      "openLabNFTAddress",
      "openLabNFTAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_openLabNFTAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "openLabNFTAddress",
      "openLabNFTAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  providerAddresses(param0: Address): boolean {
    let result = super.call(
      "providerAddresses",
      "providerAddresses(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_providerAddresses(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "providerAddresses",
      "providerAddresses(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  royaltyBase(): BigInt {
    let result = super.call("royaltyBase", "royaltyBase():(uint256)", []);

    return result[0].toBigInt();
  }

  try_royaltyBase(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("royaltyBase", "royaltyBase():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  royaltyPercentage(): BigInt {
    let result = super.call(
      "royaltyPercentage",
      "royaltyPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_royaltyPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "royaltyPercentage",
      "royaltyPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factoryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factoryOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _openLabNFTAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _royaltyPercentage(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptJobCall extends ethereum.Call {
  get inputs(): AcceptJobCall__Inputs {
    return new AcceptJobCall__Inputs(this);
  }

  get outputs(): AcceptJobCall__Outputs {
    return new AcceptJobCall__Outputs(this);
  }
}

export class AcceptJobCall__Inputs {
  _call: AcceptJobCall;

  constructor(call: AcceptJobCall) {
    this._call = call;
  }

  get _jobId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AcceptJobCall__Outputs {
  _call: AcceptJobCall;

  constructor(call: AcceptJobCall) {
    this._call = call;
  }
}

export class AddValidatedProviderCall extends ethereum.Call {
  get inputs(): AddValidatedProviderCall__Inputs {
    return new AddValidatedProviderCall__Inputs(this);
  }

  get outputs(): AddValidatedProviderCall__Outputs {
    return new AddValidatedProviderCall__Outputs(this);
  }
}

export class AddValidatedProviderCall__Inputs {
  _call: AddValidatedProviderCall;

  constructor(call: AddValidatedProviderCall) {
    this._call = call;
  }

  get _provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddValidatedProviderCall__Outputs {
  _call: AddValidatedProviderCall;

  constructor(call: AddValidatedProviderCall) {
    this._call = call;
  }
}

export class AdminCancelJobCall extends ethereum.Call {
  get inputs(): AdminCancelJobCall__Inputs {
    return new AdminCancelJobCall__Inputs(this);
  }

  get outputs(): AdminCancelJobCall__Outputs {
    return new AdminCancelJobCall__Outputs(this);
  }
}

export class AdminCancelJobCall__Inputs {
  _call: AdminCancelJobCall;

  constructor(call: AdminCancelJobCall) {
    this._call = call;
  }

  get _jobId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AdminCancelJobCall__Outputs {
  _call: AdminCancelJobCall;

  constructor(call: AdminCancelJobCall) {
    this._call = call;
  }
}

export class DisableExchangeCall extends ethereum.Call {
  get inputs(): DisableExchangeCall__Inputs {
    return new DisableExchangeCall__Inputs(this);
  }

  get outputs(): DisableExchangeCall__Outputs {
    return new DisableExchangeCall__Outputs(this);
  }
}

export class DisableExchangeCall__Inputs {
  _call: DisableExchangeCall;

  constructor(call: DisableExchangeCall) {
    this._call = call;
  }
}

export class DisableExchangeCall__Outputs {
  _call: DisableExchangeCall;

  constructor(call: DisableExchangeCall) {
    this._call = call;
  }
}

export class RemoveValidatedProviderCall extends ethereum.Call {
  get inputs(): RemoveValidatedProviderCall__Inputs {
    return new RemoveValidatedProviderCall__Inputs(this);
  }

  get outputs(): RemoveValidatedProviderCall__Outputs {
    return new RemoveValidatedProviderCall__Outputs(this);
  }
}

export class RemoveValidatedProviderCall__Inputs {
  _call: RemoveValidatedProviderCall;

  constructor(call: RemoveValidatedProviderCall) {
    this._call = call;
  }

  get _provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveValidatedProviderCall__Outputs {
  _call: RemoveValidatedProviderCall;

  constructor(call: RemoveValidatedProviderCall) {
    this._call = call;
  }
}

export class ReturnFundsCall extends ethereum.Call {
  get inputs(): ReturnFundsCall__Inputs {
    return new ReturnFundsCall__Inputs(this);
  }

  get outputs(): ReturnFundsCall__Outputs {
    return new ReturnFundsCall__Outputs(this);
  }
}

export class ReturnFundsCall__Inputs {
  _call: ReturnFundsCall;

  constructor(call: ReturnFundsCall) {
    this._call = call;
  }

  get jobId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReturnFundsCall__Outputs {
  _call: ReturnFundsCall;

  constructor(call: ReturnFundsCall) {
    this._call = call;
  }
}

export class SetRoyaltyPercentageCall extends ethereum.Call {
  get inputs(): SetRoyaltyPercentageCall__Inputs {
    return new SetRoyaltyPercentageCall__Inputs(this);
  }

  get outputs(): SetRoyaltyPercentageCall__Outputs {
    return new SetRoyaltyPercentageCall__Outputs(this);
  }
}

export class SetRoyaltyPercentageCall__Inputs {
  _call: SetRoyaltyPercentageCall;

  constructor(call: SetRoyaltyPercentageCall) {
    this._call = call;
  }

  get _percentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRoyaltyPercentageCall__Outputs {
  _call: SetRoyaltyPercentageCall;

  constructor(call: SetRoyaltyPercentageCall) {
    this._call = call;
  }
}

export class SubmitJobCall extends ethereum.Call {
  get inputs(): SubmitJobCall__Inputs {
    return new SubmitJobCall__Inputs(this);
  }

  get outputs(): SubmitJobCall__Outputs {
    return new SubmitJobCall__Outputs(this);
  }
}

export class SubmitJobCall__Inputs {
  _call: SubmitJobCall;

  constructor(call: SubmitJobCall) {
    this._call = call;
  }

  get _client(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _payableToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _jobCost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _jobURI(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class SubmitJobCall__Outputs {
  _call: SubmitJobCall;

  constructor(call: SubmitJobCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get jobId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }
}

export class UpdateNFTContractAddressCall extends ethereum.Call {
  get inputs(): UpdateNFTContractAddressCall__Inputs {
    return new UpdateNFTContractAddressCall__Inputs(this);
  }

  get outputs(): UpdateNFTContractAddressCall__Outputs {
    return new UpdateNFTContractAddressCall__Outputs(this);
  }
}

export class UpdateNFTContractAddressCall__Inputs {
  _call: UpdateNFTContractAddressCall;

  constructor(call: UpdateNFTContractAddressCall) {
    this._call = call;
  }

  get _openLabNFTAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateNFTContractAddressCall__Outputs {
  _call: UpdateNFTContractAddressCall;

  constructor(call: UpdateNFTContractAddressCall) {
    this._call = call;
  }
}
