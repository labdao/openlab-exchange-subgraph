import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import {
  Exchange,
  Received,
  jobActive,
  jobCancelled,
  jobClosed,
  jobCreated
} from "../generated/Exchange/Exchange"

import { Job } from "../generated/schema"

const weiDivisor = new BigDecimal(BigInt.fromI64(1000000000000000000))

export function handlejobActive(event: jobActive): void {
  let id = event.params._jobId.toHex()
  let job = Job.load(id)
  if (job === null) {
    job = new Job(id)
  }
  job.provider = event.params._provider
  job.status = event.params._status
  const cost = new BigDecimal(event.params._jobCost)
  job.jobCost = cost.div(weiDivisor)

  job.save()
}

export function handlejobCancelled(event: jobCancelled): void {
  let id = event.params._jobId.toHex()
  let job = Job.load(id)
  if (job === null) {
    job = new Job(id)
  }
  job.status = event.params._status
  const cost = new BigDecimal (event.params._jobCost)
  job.jobCost = cost.div(weiDivisor)

  job.save()
}

export function handlejobClosed(event: jobClosed): void {
  let id = event.params._jobId.toHex()
  let job = Job.load(id)
  if (job === null) {
    job = new Job(id)
  }
  job.status = event.params._status
  job.openlabNFTURI = event.params._openLabNFTURI
  const cost = new BigDecimal(event.params._jobCost)
  job.jobCost = cost.div(weiDivisor)

  job.save()
}

export function handlejobCreated(event: jobCreated): void {
  let job = new Job(event.params._jobId.toHex())
  job.client = event.params._client
  job.payableToken = event.params._payableToken
  const cost = new BigDecimal(event.params._jobCost)
  job.jobCost = cost.div(weiDivisor)
  job.jobURI = event.params._jobURI
  job.status = event.params._status

  job.save()
}
