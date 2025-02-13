import { Test } from '@nestjs/testing'
import { AppModule } from '@/app/app.module'
import { AppController } from '@/app/app.controller'
import { describe, expect, it, beforeAll } from 'vitest'

describe('AppController', () => {
 let appController: AppController

 beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
   imports: [AppModule],
  }).compile()

  appController = moduleRef.get<AppController>(AppController)
 })

 it('returns "OK" for /health', () => {
  expect(appController.healthCheck()).toBe('OK')
 })
})
