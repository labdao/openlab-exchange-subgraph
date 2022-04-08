import { BigInt } from "@graphprotocol/graph-ts"
import {
  Exchange,
  Received,
  jobActive,
  jobCancelled,
  jobClosed,
  jobCreated
} from "../generated/Exchange/Exchange"

import { Job } from "../generated/schema"

export function handlejobActive(event: jobActive): void {
  let id = event.params._jobId.toHex()
  let job = Job.load(id)
  if (job == null) {
    job = new Job(id)
  }
  job.provider = event.params._provider
  job.status = event.params._status
  job.save()
}

export function handlejobCancelled(event: jobCancelled): void {
  let id = event.params._jobId.toHex()
  let job = Job.load(id)
  if (job == null) {
    job = new Job(id)
  }
  job.status = event.params._status
  job.save()
}

export function handlejobClosed(event: jobClosed): void {
  let id = event.params._jobId.toHex()
  let job = Job.load(id)
  if (job == null) {
    job = new Job(id)
  }
  job.status = event.params._status
  job.openlabNFTURI = event.params._openLabNFTURI
  job.save()
}

export function handlejobCreated(event: jobCreated): void {
  let job = new Job(event.params._jobId.toHex())
  job.client = event.params._client
  job.payableToken = event.params._payableToken
  job.jobCost = event.params._jobCost
  job.jobURI = event.params._jobURI
  job.status = event.params._status
  job.save()
}
